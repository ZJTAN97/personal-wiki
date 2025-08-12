# `useTransition`

## Introduction

Literally a hook for transition, it returns the transition state and a function to start the transition

React state updates can be classified into two categories:

1. <b>Urgent updates</b>. They reflect direct interactions, such as typing, clicking, pressing and dragging
2. <b>Transition updates</b>. They transition the UI from one view to another.

It is really important to use it in combination with `React.memo`

## When to `useDeferredValue` vs `useTransition`

useDeferredValue and useTransition in the end do the same thing.

- Use useTransition() if you have access to the state update code and the update should has lower priority.
- Use useDeferredValue() if you don't have that access to the state update code.

## Usage

```tsx
const [isPending, startTransition] = useTransition();
```

## Example 1

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

  // need to duplicate state
  const [transitionValue, setTransitionValue] = useState(0);

  // Controlling it yourself implicitly, in a code block
  // just a different way of declaring compared to `useDeferredValue`
  const [isPending, startTransition] = useTransition();

  // runs after the DOM is manipulated not after the render function is ran
  useEffect(() => {
    console.log("useEffect:", transitionValue, value, isPending);
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
        <div>Deferred Value: {transitionValue}</div>
        {isPending ? <div>pending</div> : null}
      </div>
      <div
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <MemoedSlowComponent value={transitionValue} />
      </div>
    </>
  )
}
```

## Useful Resources

- https://reactjs.org/docs/hooks-reference.html#usetransition
- https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue
- https://swizec.com/blog/a-better-react-18-starttransition-demo/
- https://www.youtube.com/watch?v=TFwCI4HEdSY
