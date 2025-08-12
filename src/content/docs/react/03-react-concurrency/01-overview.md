---
title: "Overview"
author: "Zhi Jie"
tags: ["react"]
---

## Background

According to the React team, Concurrency is not a feature per se. It’s a new behind-the-scenes mechanism that enables React to simultaneously prepare multiple versions of your UI.

As a result, React will delegate to the developer the task of identifying which changes are essential before re-rendering the component.

Before React 18, rendering was a single, uninterrupted, synchronous operation, and once it had begun, it could not be interrupted. Concurrency is an important update to React’s rendering mechanism. In conjunction with Concurrency, React allows us to interrupt rendering.

## What is Concurrency?

- Essentially allows React to have multiple computations happening at the same time.
- With concurrency, we can have concurrent rendering where React renders a React Tree in the background without blocking the current React Tree

The benefits are:

1. Not blocking an input while calculating a larger update. Examples includes:

- Table Filtering
- Routing

On a more layman term, what it does is react essentially stays on the old UI for a bit until the new UI is in a good enough state to be rendered

## What are some APIs related to concurrency?

1. [`useDeferredValue`](/react/02-hooks/01-use-deferred-value)
2. [`useTransition`](/react/02-hooks/02-use-transition/)
3. `<Suspense />`
