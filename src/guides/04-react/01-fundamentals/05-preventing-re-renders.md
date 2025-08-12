# Re-rendering Optimization Techniques

## Recap on why react re-renders

The two most important ones are:

1. Parent Re-render
2. State changes

```jsx
const Parent = () => {
  // 1. if Parent re-render, Child re-render

  const [state, setState] = useState(0); // 2. state change, re-render Parent and Child

  return <Child />;
};
```

## 1. Moving state down

`Problem: Opening a modal`

State update will be triggered when clicking on the button and everything will re-render.

```jsx
const Component = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Something>
      {
        isOpen && <ModalDialog />
      }
      <Button
        onClick=(() => setIsOpen(true)}
      >
       Open
      </Button>
      <VerySlowComponent />
      <BunchOfSlowStuff />
    </Something>
  )
}
```

`Solution: move state down by combining ModalDialog with Button`

```jsx

const ButtonWithModalDialog = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {
        isOpen && <ModalDialog />
      }
      <Button
        onClick=(() => setIsOpen(true)}
      >
       Open
    </>
  )
}

const Component = () => {


  return (
    <Something>
      <ButtonWithModalDialog />
      <VerySlowComponent />
      <BunchOfSlowStuff />
    </Something>
  )
}
```

## 2. Components as children prop

`Problem: Tracking a scrolling behaviour`

```jsx
const Component = () => {
  const [scrollY, setScrollY] = useState(0);

  return (
    {/* Triggers state updates on scroll */}
    <div onScroll={({ currentTarget }) => setScrollY(currentTarget.scrollTop)}>
        {/* all these will keep re-rendering */}
      <VerySlowComponent />
      <BunchOfSlowStuff />
    </div>
  );
};
```

`Solution: use component as children`

:::info
Note that `children` as props can be declared/expressed as such, all these is just syntax sugar

```jsx
<Parent>
  <Child />
</Parent>

is the same as

<Parent
  children={<Child />}
/>
```

:::

`children` are props in react components, and props are not affected by state changes in components.

We can use component as children and get rid of unnecessary re-rendering.

```jsx
const ComponentWithScroll = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  return (
    <div onScroll={({ currentTarget }) => setScrollY(currentTarget.scrollTop)}>
      {children} {/* just props, will not re-render now! */}
    </div>
  );
};

const Component = () => {
  return (
    <ComponentWithScroll>
      <VerySlowComponent />
      <BunchOfSlowStuff />
    </ComponentWithScroll>
  );
};
```

## 3. Components as props

Extending the idea of components as children prop, we can use this as a composition pattern when we want to make components more flexible.

`Problem: Having a Shell Component with collapsible sidebar`

```jsx
const Component = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="container">
      <div className="sidebar" style={{ width: isCollapsed ? 10 : 'auto' }}>
        <VerySlowSideBar />
      </div>
      <div className="content">
        {/* Triggers re-render through state update */}
        <Button onClick={() => setIsCollapsed(!isCollapsed)}>Collapse</Button>
        <VeryHeavyContent />
      </div>
    </div>
  );
};
```

`Solution: Components as props`

```jsx
const Shell = ({ column, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="container">
      <div className="sidebar" style={{ width: isCollapsed ? 10 : 'auto' }}>
        {column}
      </div>
      <div className="content">
        {/* Triggers re-render through state update */}
        <Button onClick={() => setIsCollapsed(!isCollapsed)}>Collapse</Button>
        {content}
      </div>
    </div>
  );
};

const Component = () => {
  return <Shell column={<VerySlowComponent />} content={<BunchOfSlowStuff />} />;
};
```

## 4. Memo

Without props, it will be very simple

```jsx
const ChildMemo = React.memo(Child);

const Parent = () => {
  // if parent re-renders
  return <ChildMemo />; // No re-renders!
};
```

With props in play, react will now compare against props before it re-renders.

:::info
if you remember from above, without memo, comparing props was actually not a condition for re-rendering!
:::

## 5. Conclusion

Key thing is to isolate state changes
