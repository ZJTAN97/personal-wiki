# Inference Basics

## 1. Get the Return Type of a Function

```ts
const myFunc = () => {
  return "hello";
};

type MyFuncReturn = ReturnType<typeof myFunc>;
```

## 2. Extract Function Parameters into a Type

```ts
const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>;
type MakeQueryParametersSecondArgument = MakeQueryParameters[1];
```

## 3. Extract the Awaited Result of a Promise

Awaited helps you unwrap promises.

```ts
const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;
```

## 4. Create a Union Type from Object's Keys

```ts
const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

type TestingFramework = keyof typeof testingFrameworks; // "vitest" | "jest" | "mocha"
```
