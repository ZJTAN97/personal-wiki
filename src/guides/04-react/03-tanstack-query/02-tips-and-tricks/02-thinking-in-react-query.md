# Thinking in React Query

## Reference

This was taken from [TKTodo's Blog on Thinking in React Query](https://tkdodo.eu/blog/thinking-in-react-query)

## Introduction

- React Query is NOT a data fetching library. The only thing it cares about if we are returning a `fufilled` or `rejected` Promise.

- React Query is an Asynchronous State Manger. Know the difference.

  - Client State: owned completely, synchronously available, always up-to-date
  - Server State: persisted remotely, asynchronously available, potentially out of date

- React Query somewhats replicate the selector based api with the use of `QueryKeys`

- `staleTime` is your best friend. Definition: `time until data goes stale (no longer fresh)`

- `staleTime` defaults to zero. React Query marks everything as stale instantly. Instead of erroring on the side of minimizing network requests, React Query errors on the side of keeping things up-to-date.

- Treat parameters as dependencies because they are.
  - Cached separately
  - Avoids race conditions
  - Allows automatic refeteches
  - Avoid stale closure problems
