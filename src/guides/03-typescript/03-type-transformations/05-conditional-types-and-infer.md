# Conditional Types and Infer

## 1. Add Conditional Logic to a Type Helper

```ts
type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

type Test1 = YouSayGoodbyeAndISayHello<"hello">;
type Test2 = YouSayGoodbyeAndISayHello<"goodbye">;
```

## 2. Refine Conditional Logic in a Type Helper

`never` is a way to state that it should not happen or not allowed.

```ts
type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : T extends "goodbye" ? "hello" : never;
```

## 3. Introducing Infer for Conditional Logic

`infer` means whatever that is passed, just infer it.

Usually used in a conditional check, where you can extract the variable type in a specific branch

```ts
type GetDataValue<T> = T extends { data: any } ? T["data"] : never;

type Test1 = GetDataValue<{ data: "hello" }>; // "hello"
type Test2 = GetDataValue<{ data: { name: "hello" } }>; // { name: "hello" }
type Test3 = GetDataValue<{ data: { name: "hello"; age: 20 } }>; // { name: "hello", age: 20 }
type Test4 = GetDataValue<string>;

// another way to do it
type GetDataValue<T> = T extends { data: infer TData } ? TData : never;
```

## 4. Extract Type Arguments to Another Type Helper

```ts
interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint> ? TPoint : never;

type Example = MyComplexInterface<"click", "window", "my-event", { x: 12; y: 14 }>;

type Test = GetPoint<Example>;
```
