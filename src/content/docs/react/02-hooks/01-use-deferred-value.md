---
title: "useDeferredValue"
author: "Zhi Jie"
tags: ["react"]
---

## Introduction

This hook is part of the react concurrent API. `useDeferredValue` accepts a value and returns a new copy of the value that will defer to more urgent updates.

The previous value is kept until urgent updates have completed and that is when the new value is rendered.

This hook shares very similar concept to using debouncing/throttling to defer updates.

## Usage

```tsx
const deferredValue = useDeferredValue(value);
```

## Example 1 (Handling re-rendering of a heavy component)

```tsx

const SlowComponent = ({ value }: { value: number }) => {
  const result = Array(50000).fill(1).map(_, index) => <span key={index}>{value + index}</span>
  return (
    <div>
      {result}
    </div>
  )
}

// Compare the props, if the props are identical, will not call the render method
// This is fine for this example as there is no nested objects / arrays
// if used without memo, it will try to render even though the props are the same (when comparing the deferred value)
const MemoSlowComponent = memo(SlowComponent);


const App = () => {

  // this state causes the re-render
  const [value, setValue] = useState(0);

  // make it less of a priority
  // so that the following child components do not re-render first
  const deferredValue = useDeferredValue(value);

  const isPending = deferredValue !== value;
  console.log("render App", deferredValue, value, isPending);

  // runs after the DOM is manipulated not after the render function is ran
  useEffect(() => {
    console.log("useEffect:", deferredValue, value, isPending);
  });

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <button
            onClick={() => {
              setValue((prevValue) => prevValue + 1);
            }}
          >
            Actual Value: {value}
          </button>
        </div>
        <div>Deferred Value: {deferredValue}</div>
        {isPending ? <div>pending</div> : null}
      </div>
      <div
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <MemoedSlowComponent value={deferredValue} />
      </div>
    </>
  )
}
```

## Example 2 (Table Component)

```tsx

type Data = {
  id: string;
  name: string;
}

const Table = ({ data, query }: { data: Data; query: string; }) => {
  // Memoize filtered rows to avoid recalculating every render
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
}

const App = () => {

  const { data } = useGetData(...) // hook that retrieves some huge data

  const [searchQuery, setSearchQuery] = useState("");

  const deferredQuery = useDeferredValue(searchQuery);
  const isPending = deferredQuery !== searchQuery;

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <div style={{ color: isPending ? "#ccc" : "inherit" }}>
        <MemoedTable data={data} query={deferredQuery} />
      </div>
    </div>
  );
}

```

## Additional notes

- Compared to `useTransition`, use this hook if you do not have access to the updator method/function
- Usually, it is best to stick to `useTransition`

## Useful Links

1. [Scheduling in React](https://spiess.dev/blog/scheduling-in-react)
