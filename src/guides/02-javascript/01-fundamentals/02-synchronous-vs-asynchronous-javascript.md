# Synchronous vs Asynchronus JavaScript

## 1. Introduction

JavaScript Functions are First-Class Citizens. you can create and modify a function, use it as an argument, return it from another function, and assign it to a variable.

We can classify most asynchronous JavaScript operations with two primary triggers:

1. Browser API/Web Api event or functions (`setTimeout`, `onclick` etc..)
2. Promises. unique JS object that allows us to perform asynchronous operations.

## 2. Synchronous JavaScript

How Function Exectuion stack works?

Stops execution of further code until this is done. Because it this stoppage of further execution, synchronous code is called 'blocking'. Blocking in the sense that no other code will be executed.

## 3. Asynchronous JavaScript

Execution of this is deferred to the event loop, this is a construct in a JS virtual machine which executes asynchronous functions (after the stack of synchronous functions is empty). Asynchronous code is called non blocking because it doesn't block further code from running.
