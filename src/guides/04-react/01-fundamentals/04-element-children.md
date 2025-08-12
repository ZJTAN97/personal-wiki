# Elements and Children in React

## Elements (or is it just Components..)

Component in its simplest form is just a function

```jsx
const Parent = (props) => {
  return <Child />; // this is the element, the return is the element
};
```

What makes a function a component is in the `return`. A component is a function that returns an Element

Element is just an object that describes a component as such:

```jsx
<Child />
```

And its literally syntax sugar for this

```js
React.createElement(Child, null, null);
```

Console logging `<Child />` will yield something like

```js
{
  type: Child // Tells react what should be rendered
  ... // React Stuff
}
```

If type is a function, will assume its a component and react will trigger rendering of that component.

However if type is a string, react will convert it into a DOM element right away as such

```js
{
  type: "div",
  ... // React Stuff
}
```

## Rendering

Based on our understanding above, react will just recursively go down the tree until it reaches string types and convert it into a DOM element, until there are no more functions and the entire tree of DOM elements is built. The tree is then sent to the browser.

Then this is where user interacts with it which triggers re-rendering and where `Diffing` and `Reconciliation` takes place.

Starting from the component that triggered state update, React starts building another tree

```jsx
const Parent = (props) => {
  const [state, setState] = useState();

  return <Child />;
};
```

Shallow comparison (compares by reference and not value)

```
Parent ();       Parent();
"Before"         "After"
{                 {
  type: Child       type: Child
}                  }
```

If shallow comparison returns true, react will think element has not change and will skip its re-render.

If shallow comparison returns false, react will then compare the "type", if value is exactly same, react will then trigger re-render

In React, shallow comparison is often used to optimize component rendering. The `shallowCompare` method checks whether the current props and state are equal to the next ones, helping to determine if a component should update:

```js
shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this.props, nextProps) || shallowCompare(this.state, nextState);
}
```
