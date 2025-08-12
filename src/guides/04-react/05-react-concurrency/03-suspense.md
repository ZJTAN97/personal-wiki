# Suspense

## Introduction

React Suspense allows developers to specify a fallback UI that is displayed while a component is loading. This mechanism simplifies handling loading states and improves the overall user experience by preventing the display of incomplete content.

It is designed to work with React Concurrent Mode which enahances React's ability to manage asynchronous rendering and improve user experience.

## Usage

```tsx
const ProfilePage = React.lazy(() => import("./ProfilePage")); // Lazy-loaded

// Show a spinner while the profile is loading
<Suspense fallback={<Spinner />}>
  <ProfilePage />
</Suspense>;
```

## What has changed in React 18?

You can now use Suspense on the server!

https://blog.openreplay.com/ultimate-guide-to-upgrading-to-react-18/


## Suspense with Hooks

The `useTransition` and `useDeferredValue` can be leveraged for Suspense.



## Misc

- Suspense makes the “UI loading state” a first-class declarative concept in React, enabling you to build higher-level features
- To use Suspense properly, you need proper resolving of promises (i.e. "stable" promises that can be resolved properly)

