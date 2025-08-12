---
title: "Rendering"
author: "Zhi Jie"
tags: ["react"]
---

## Introduction

It all starts with `mounting` (Create), when a component first comes to life. During mounting the following happens

- initializes it states
- run its hooks
- and commit to the DOM

Then there is `umounting` (Delete), when React detects a component is not needed anymore. Destorying the component's instance, states and all the DOM elements

`Re-rendering` (Update), is much faster, React attempts to re-use everything it can, like component's instance and
update already created DOM elements with new properties.

## Conditions for react components to re-render

1. Component state changes
2. Parent component re-renders
3. Context changes

### 1. Re-rendering due to state changes

```tsx
// `App` will re-render if isOpen state update triggered
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Click me</Button>
      {/* All these will be re-rendered! */}
      <HeavyModal />
      <HeavyComponent />
    </div>
  );
};
```

Imagining a typical React application as a tree, everything down from where the state update happened down to its children and grand children will re-rendered.

### 2. Re-rendering due to parent component re-rendering

Pretty much the same example as in `1.`. In this case, `<HeavyModal />` and `<HeavyComponent />` will re-render as its parent `App` re-renders due to state change

```tsx
// `App` will re-render if isOpen state update triggered
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Click me</Button>
      {/* All these will be re-rendered! */}
      <HeavyModal />
      <HeavyComponent />
    </div>
  );
};
```

### 3. Context Changes

When a component consumes a state from a Context provider, it will re-render if that state changes.

## Primitive vs Non-primitive Props

Non-primitive values in JavaScript are compared by Reference

```js
{ display: 'flex' } === { display: 'flex' } // false
```

You can preserve reference to a non-primitive value with `useMemo`.

You can preserve reference to a function with `useCallback`

## Prop change does not triggers a re-render

:::danger
A prop change does not re-render a component if the prop is stored as a local variable. it only re-renders when the prop is stored as a state variable.
:::

## Useful Resources

- [React Rendering Cheat Sheet](https://alexsidorenko.com/blog/react-render-cheat-sheet)
- [Does a prop change really re-render a component?](https://medium.com/@rajatsikder/react-performance-1-does-a-prop-or-state-change-always-re-render-a-component-de6e5e01a201)
