---
title: "Memoization"
author: "Zhi Jie"
tags: ["react"]
---

To understand why a prop change doesn't trigger a render, we have to look at `React.memo`. This is the one place where props actually get a "vote" in whether a component re-renders.

## The Default Behavior (Without React.memo)

By default, React is "dumb" about props. When a parent re-renders, React doesn't even look at the props of the child; it just renders the child automatically.

## The Optimized Behavior (With React.memo)

`React.memo` is a Higher Order Component that tells React: "Hey, before you re-render this child, check if its props have actually changed. If they are exactly the same as last time, skip the render."

```tsx
import { memo, useState } from "react";

// This component will ONLY re-render if 'name' changes
const Child = memo(({ name }) => {
  console.log("Child rendered!");
  return <div>{name}</div>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alex");

  return (
    <>
      {/* Changing count will NOT make Child re-render anymore! */}
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      {/* Changing name WILL make Child re-render */}
      <button onClick={() => setName("Jordan")}>Change Name</button>

      <Child name={name} />
    </>
  );
};
```

## The "Referential Integrity" Trap

This is where those non-primitive values we mentioned earlier become dangerous. If you use React.memo, but you pass an object or a function created inside the parent, the optimization will fail.

```tsx
const Parent = () => {
  const [count, setCount] = useState(0);

  // This object is RE-CREATED on every render of Parent
  const user = { name: "Alex" }; 

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
      {/* memo(Child) thinks 'user' is new every time because the reference changed! */}
      <Child user={user} /> 
    </>
  );
};
```

To fix the trap above, you would wrap that object in useMemo so the "bucket" in memory stays the same between renders.