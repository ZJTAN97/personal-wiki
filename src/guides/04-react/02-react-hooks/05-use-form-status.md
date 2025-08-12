# `useFormStatus`

## Introduction

This hook is part of the React Actions API that allows you to extract the status of a form action in a sub-component.

`useFormStatus` reads the status of the parent `<form>` as if the form was a context provider.

## Usage

```tsx
const { pending, method, action, data } = useFormStatus();
```
