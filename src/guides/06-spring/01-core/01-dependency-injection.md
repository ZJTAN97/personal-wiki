# Dependency Injection

## 1. Introduction

Dependency injection is defined as a method where an object (the client) receives its dependencies (services or resources) from an external injector, rather than instantiating them directly. This promotes loose coupling between classes and enhances flexibility in managing dependencies

## 2. Inversion of Control

A principle in SWE which transfers the control of objects or portions of a program to a container or framework, often used in context of OOP.

IoC also known as Dependency Injection is a process whereby objects define their dependencies, that is, the other objects they work with,
only through constructor arguments, arguments to a factory method, or properties that are set on the object instance after it is constructed
or returned from a factory method

# 3. Benefits of Dependency Injection

- <b>Loose Coupling</b>: By decoupling the creation of dependencies from their use, DI allows for easier changes and maintenance of code without affecting other components.

- <b>Improved Testability</b>: DI makes it easier to substitute real dependencies with mock objects during testing, facilitating unit tests that are independent of external factors like databases or APIs.

- <b>Enhanced Flexibility</b>: Changes to dependencies can be made without altering the client code, allowing for runtime configuration and easier integration of new services

## 4. Types of Dependency Injection

- <b>Constructor Injection</b>: Dependencies are provided through a class constructor.

- <b>Setter Injection</b>: Dependencies are set through setter methods after the object is constructed.

- <b>Interface Injection</b>: The dependency provides an injector method that will inject the dependency into any client passed to it

## 5. Differences between the different types

- Constructor Injection does not allow you to construct object, until your dependencies are ready.

- Drawback of Setter Injection is security.

- You can override certain dependency which is not possible with constructor injection as every time you call the constructor, a new object is created

- Use setter injection when a number of dependencies are more or you need more readability

- Use Constructor Injection when Object must be created with all of its dependencies.
