---
title: "React LifeCycle"
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

## React LifeCycle

⚛️ The React Lifecycle & Rendering GuideUnderstanding how React manages the UI is the key to building performant applications. Let’s break down the three primary phases of a component's life.

### 1. The Component Lifecycle

Mounting
- Create
- The component is born. 
- React initializes state, executes hooks, and performs the initial "Commit" to the DOM.

Re-rendering

- UpdateSomething changed. 
- React calls the function again, calculates the difference (diffing), and updates only the necessary DOM elements.

Unmounting
- Delete
- The component is removed. 
- React cleans up state, effect cleanups, and tears down the DOM nodes.


### 2. Why do components re-render?
A component "re-renders" when React needs to determine if the UI should look different. There are three triggers:

⚡ Trigger 1: State Changes
When you call a state setter (like setCount), React schedules a render for that specific component.

⚡ Trigger 2: Parent Re-renders
This is the most important rule: If a parent component re-renders, all of its children re-render by default, regardless of their props.

```ts
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      {/* If App re-renders, these BOTH re-render automatically! */}
      <HeavyModal /> 
      <HeavyComponent />
    </div>
  );
};
```

:::tip
Imagine the React tree: Re-renders flow downwards. Everything from the point of the state change down to the bottom of that branch will be checked.
:::

⚡ Trigger 3: Context Changes
If a component uses useContext, it will re-render whenever the value provided by that Context Provider changes.

### 3. The "Props" Misconception
A common myth is that "a component re-renders because its props changed."

The Truth: A component re-renders because its parent re-rendered. If the parent stays the same, changing a local variable and passing it as a prop will not trigger a render. React only "notices" changes that originate from State or Context.

### 4. Stability & Memoization

In JavaScript, objects and functions are compared by reference, not by value.

```js
// Even though they look the same, they are different "buckets" in memory
{ a: 1 } === { a: 1 } // false
() => {} === () => {} // false
```

When trying to optimize (using React.memo), you must ensure your props are stable so the reference doesn't change on every render. Use these hooks to stay stable:

`useMemo`: Remembers a calculated value or object.

`useCallback`: Remembers a function instance.
