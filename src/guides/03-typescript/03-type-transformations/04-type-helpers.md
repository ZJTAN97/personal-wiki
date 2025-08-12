# Type Helpers

## 1. Introduction

- Basically a lot of generics
- Think of it as functions with arguments where arguments are within `<>`, i.e type functions

```ts
type ReturnWhatIPassIn<T> = T;

type StringType = ReturnWhatIPassIn<string>; // string
type NumberType = ReturnWhatIPassIn<number>; // number
```

## 2. Creating a Maybe Type Helper

```ts
type Maybe<T> = T | undefined | null;

type MaybString = Maybe<string>; // returns string | undefined | null
```

## 3. Ensure Type Safety in a Type Helper

- idea of constraining the "function arguments"
- when you see `extends`, can think of it as "assignable to" or "must be of this certain type"
- if no constraint, default will be `unknown`

```ts
type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

// @ts-expect-error
AddRoutePrefix<boolean>,
// @ts-expect-error
AddRoutePrefix<number>,
```

## 4. Creating a Reusable Type Helper

- Showing that we can have multiple arguments

```ts
type CreateDataShape<TData, TError> = {
  data: TData;
  error: TError;
};

type Shape1 = CreateDataShape<string, TypeError>;

type Shape2 = CreateDataShape<number, TypeError>;
```

## 5. Optional Type Parameters in Type Helpers

- A thing to note is that for optional ones, need to pass as the last argument as required parameters cannot follow after optional parameters

```ts
type CreateDataShape<TData, TError = undefined> = {
  data: TData;
  error: TError;
};

type Shape1 = CreateDataShape<string>; // error defaults to `undefined`

type Shape2 = CreateDataShape<number, TypeError>;
```

Another example combining union

```ts
type MaybeError = Error | undefined;

type CreateDataShape<TData, TError extends MaybeError = undefined> = {
  data: TData;
  error: TError;
};

type Shape1 = CreateDataShape<string>;

type Shape2 = CreateDataShape<number, TypeError>;
```

## 6. Functions as Constraints for Type Helpers

The key thing is `T extends (...args: any) => any`

Extra things to remember, `Parameters<T>` returns an array of the function parameters

```ts
type GetParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

type Test1 = GetParametersAndReturnType<() => string>;
// Test1 Shape: { params: [], returnValue: string }

type Test2 = GetParametersAndReturnType<(s: string) => void>;
// Test2 Shape: { params: [string], returnValue: void }

type Test3 = GetParametersAndReturnType<(s: string, n: number) => string[]>;
// Test 3 Shape: { params: [string, number], returnValue: string[] }
```

## 7. Constraining Types for anything but null or undefined

When we extend `{}`, this value has a specific use in TypeScript which represents anything that is not null or undefined. (Like a truthy thing).

This happens because of structural typing in TypeScript. TypeScript does not match exclusively.

```
type Maybe<T extends {}> = T | null | undefined;


// In TypeScript, string is just an object, literally everything is an object in TypeScript
const whatever: {} = "123123" // this is legit too!

```

## 8. Constraining Type Helpers to Non-Empty Arrays

```ts
// First one is to state that you need minimally one item in the Tuple
type NonEmptyArray<T> = [T, ...T[]];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

makeEnum([]); // errors
```
