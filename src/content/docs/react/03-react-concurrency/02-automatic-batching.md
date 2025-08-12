---
title: "Automatic Batching"
author: "Zhi Jie"
tags: ["react"]
---

## Overview

Batching is when React merges multiple state updates into a single re-render for improved performance.

For instance, if you have two state updates inside the same click event, React has always batched these into a single update and re-render.

## Background

### Before React 18

In versions prior to React 18, React only batched state updates during React event handlers (like onClick). However, it did not batch updates triggered by asynchronous operations such as promises or setTimeout. This meant that if you called multiple setState functions within a promise or a timeout, each call would trigger a separate render, leading to potential performance issues.

```js
Promise.resolve().then(() => {
  setA("valueA"); // Triggers a render
  setB("valueB"); // Triggers another render
});
```

### After React 18

React 18 and Automatic Batching
With the release of React 18, automatic batching became a built-in feature. This means that now all state updates, regardless of whether they are triggered by promises, timeouts, or native events, are batched together:

```js
Promise.resolve().then(() => {
  setA("valueA"); // No longer triggers a render immediately
  setB("valueB"); // Also batched with the previous update
});
// Only one render occurs after both state updates.
```

This change significantly improves performance and reduces unnecessary renders, making it easier for developers to manage state without worrying about the context in which updates occur.

## Example

```tsx
const App = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCount((c) => c + 1); // Does not re-render yet
    setFlag((f) => !f); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "green" : "red" }}>{count}</h1>
    </div>
  );
};
```
