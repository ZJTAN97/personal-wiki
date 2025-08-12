# Getting Started

## 1. Basic Types

```ts
let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: BigInt = 123n;
```

## 2. Optional Function Parameters

```ts
const concatName = (first: string, last?: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

const result = concatName("John", "Doe");
const result2 = concatName("John");
```

## 3. Default Parameters in JavaScript Functions

```ts
// TS knows that last is optional with default and of type String
const concatName = (first: string, last = "Doe") => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};
```

## 4. Object Property Types / Typing Object Literals

```ts
const concatName = (user: { first: string; last: string }) => {
  return `${user.first} ${user.last}`;
};
```

## 5. Arrays

```ts
type ShoppingCart = {
  items: string[]; // more common
  alternativeItems: Array<string>; // just more explicit
};
```

## 6. Rest Parameters

```ts
export function concatenate(...strings: string[]) {
  return strings.join("");
}

concatenate("1", "2", "3");
```

## 7. Tuples for Precise Array Structure

```ts
const setRange = (range: [number, number]) => {}


// Optional member for a tuple example
const setCoordinates = (coordinates: [
  latitude: number,
  longitude: number,
  elevation?: number | undefined
])
```

## 8. Function Types

Usually for side effects, we can return void

```ts
type User = {
  id: string;
  name: string;
};

const modifyUser = (user: User[], id: string, makeChange: (user: User) => User) => {};
```

## 9. Typing an Event Listener

```ts
const addClickEventListener = (listener: () => void) => {
  document.addEventListener("click", listener);
};

addClickEventListener(() => {
  console.log("Clicked!");
});
```

## 9. Restricting Set Types

```ts
const userIds = new Set<number | string | { name: string }>();

userIds.add(1);
userIds.add(2);
userIds.add(3);

userIds.add("123");
userIds.add({ name: "Max" });
```

## 10. Type Checking Maps

```ts
const userMap = new Map<number | string, { name: string; age: number } | string>();

userMap.set(1, { name: "Max", age: 30 });
userMap.set(2, { name: "Manuel", age: 31 });

userMap.set("3", { name: "Anna", age: 29 });

userMap.set(3, "123");
```

## 11. Global Scripts

Fun Fact: once a TypeScript file has no import / export, the code is global. (Though I think this can be configured at `tsconfig.json`)
