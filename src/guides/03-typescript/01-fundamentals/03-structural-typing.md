# Structural Typing

## Introduction

TypeScript's structural type system is a key feature that allows types to be defined and compared based on their structure rather than their explicit names or declarations.

A basic example of structural typing

```ts
interface Ball {
  diameter: number;
}

interface Sphere {
  diameter: number;
}

const ball: Ball = { diamater: 10 };
const sphere: Sphere = { diameter: 20 };

sphere = ball; // No issues
ball = shere; // No issues
```

## Key Characteristics

### 1. Type Compatibility

In TypeScript, two types are compatible if one type has at least the same members as the other. This means that if an object contains the required properties, it can be used interchangeably with any type that expects those properties, regardless of the object's declared type

An example on Excess Properties

```ts
type CreateQuestionRequest = {
  title: string;
  content: string;
};

type QuestionResponse = {
  id: string;
  title: string;
  content: string;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
};

const questionResponse: QuestionResponse = {
  id: "1",
  title: "test",
  content: "test",
  createdAt: new Date(),
  updatedAt: new Date(),
  createdBy: "admin",
  updatedBy: "admin",
  version: 0,
};

const createQuestionRequest = questionResponse; // Okay no issues
```

But if it was the other way round, it would not work as there will be missing properties

```ts
type CreateQuestionRequest = {
  title: string;
  content: string;
};

type QuestionResponse = {
  id: string;
  title: string;
  content: string;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
};

const createQuestionRequest: CreateQuestionRequest = {
  title: "test",
  content: "test",
};

const questionResponse: QuestionResponse = createQuestionRequest; // Errors, missing properties!
```

## 2. Duck Typing

The concept is often likened to "duck typing," where an object's suitability is determined by its properties and methods rather than its specific type. If an object behaves like another (i.e., has the same structure), it can be treated as that type.

## 3. Implicit Interfaces

TypeScript allows for implicit interfaces, meaning that objects can conform to expected structures without needing explicit interface declarations. This reduces boilerplate code and simplifies maintenance.
