# Status Checks in React Query

## Reference

This was taken from the following [Status Checks in React Query](https://tkdodo.eu/blog/status-checks-in-react-query)

## 1. Introduction

- Query can be in one of the following states:

  - `success`: query was successful, and have `data`
  - `error`: query was unsuccessful and `error` is set
  - `pending`: query has no data

- `isFetching` flag is not part of the internal state machine. It is an additional flag that will be `true` whenever a request is in-flight.

- React Query embraces the stale-while-revalidate caching mechanism, which means it will always give you data if it exists, even if it's stale.

## 2. Key Point

The author recommends the `data-availability first` approach.

```tsx
const todos = useTodos();

if (todos.data) {
  return <div>{todos.data.map(renderTodo)}</div>;
}
if (todos.error) {
  return "An error has occurred: " + todos.error.message;
}

return "Loading...";
```

However there will be a situation of `Background Errors`. Because there is presence of stale data, going by the order of the condition, the error message will never be shown.

Although everything boils down to the use-case and user flow of your application, usually it is a more confusing user experience if the once available data were replaced with an error message and/or screen.

Personally for me, I would think it is okay that on first load where this no presence of stale "clean" data, error page/screen can be shown.

## 3. Conclusion

:::note

Again, there is no clear principle of what is right, as it is highly dependent on the use-case. Everyone should be aware of the consequences that aggressive refetching has, and we have to structure our code accordingly rather than strictly following the simple todo-examples 😉. - TkTodo

:::
