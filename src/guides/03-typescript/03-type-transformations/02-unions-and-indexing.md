# Unions and Indexing

## 1. Terminology around Unions

To know the difference between discriminated unions, unions and enums

```ts
// Discriminated Unions
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

// Unions
type B = "a" | "b" | "c";

// Enum
enum C {
  A = "a",
  B = "b",
  C = "c",
}
```

## 2. Extracting Members of a Discriminated Union

```ts
export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type ClickEvent = Extract<Event, { type: "click" }>; // results in same
type ClickEvent = Extract<Event, { event: MouseEvennt }>; // results in same
```

## 3. Excluding Parts of a Discriminated Union

```ts
export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type ClickEvent = Exclude<Event, { type: "click" }>;
```

## 4. Union Types

Represents the different possibilities of your code

```ts
const unionParameters = (param: "first" | "second") => {};
```

## 5. Extract Object Properties into Individual Types

Through indexing of types

```ts
export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

export type StringType = (typeof fakeDataDefaults)["String"];
export type IntType = (typeof fakeDataDefaults)["Int"];
export type FloatType = (typeof fakeDataDefaults)["Float"];
export type BooleanType = (typeof fakeDataDefaults)["Boolean"];
export type IDType = (typeof fakeDataDefaults)["ID"];
```

## 6. Extract the Discriminator from a Discriminated Union

```ts
export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type EventType = Event["type"]; // type: "click" | "focus" | "keydown"
```

## 7. Resolve an Object's Values as Literal Types

- `as const` freezes the value, turning it into a readonly property

```ts
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

export type GroupProgram = (typeof programModeEnumMap)["GROUP"]; // "group"
export type AnnouncementProgram = (typeof programModeEnumMap)["ANNOUNCEMENT"];
export type OneOnOneProgram = (typeof programModeEnumMap)["ONE_ON_ONE"];
export type SelfDirectedProgram = (typeof programModeEnumMap)["SELF_DIRECTED"];
export type PlannedOneOnOneProgram = (typeof programModeEnumMap)["PLANNED_ONE_ON_ONE"];
export type PlannedSelfDirectedProgram = (typeof programModeEnumMap)["PLANNED_SELF_DIRECTED"];
```

- You can also use `Object.freeze` but it only works on the first level and does not work on the nested levels.

- `Object.freeze` provides runtime validation as well while `as const` only during build time

## 8. Create a Union from an Object's Values

```ts
// Method 1
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

export type IndividualProgram = (typeof programModeEnumMap)["ONE_ON_ONE" | "SELF_DIRECTED" | "PLANNED_ONE_ON_ONE" | "PLANNED_SELF_DIRECTED"]; // "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"

// Method 2
export type IndividualProgram = (typeof programModeEnumMap)[Exclude<keyof typeof programModeEnumMap, "GROUP" | "ANNOUNCEMENT">];
```

## 9. Get All of an Object's Values

```ts
const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

type BackendModuleEnum = (typeof frontendToBackendEnumMap)[keyof typeof frontendToBackendEnumMap];

// to make it easier to understand
type Obj = typeof frontendToBackendEnumMap;

type BackendModuleEnum = Obj[keyof Obj];
```

## 10. Create Unions out of Array Values

- first use `as const` to make it readonly
- `typeof` and then using number index type
- `number` will get all the elements (pretty neat!!)

```ts
const fruits = ["apple", "banana", "orange"] as const;

type AppleOrBanana = (typeof fruits)[0 | 1];
type Fruit = (typeof fruits)[number];
```
