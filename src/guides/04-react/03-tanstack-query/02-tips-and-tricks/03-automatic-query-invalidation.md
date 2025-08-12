# Automatic Query Invalidation after Mutations

## Reference

This was taken from [TKTodo's Blog on Automatic Query Invalidation after Mutations](https://tkdodo.eu/blog/automatic-query-invalidation-after-mutations)

## Introduction

- Invalidating on `onSuccess` and `onSettled`. The former will only be invoked when mutation succeeded and the latter will run incase of errors.

- Awaiting an invalidation will result the mutation staying in a `pending` state until the refetch has finished

- `MutationCache` is implicitly created for us when we create `QueryClient`, although we can explicitly create it as such

  ```tsx
  import { QueryClient, MutationCache } from "@tanstack/react-query";

  const queryClient = new QueryClient({
    mutationCache: new MutationCache({
      onSuccess: () => queryCleint.invalidateQueries(), // can auto invalidate queries like this
      onError,
      onSettled,
    }),
  });
  ```
