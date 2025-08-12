# JavaScript Callback

## 1. Introduction

Any function that is passed as an argument to another function so that it can be executed in that another function is called as a callback function.
Need of callback function

We need callback functions because many JavaScript actions are asynchronous, which means they do not really stop the program from running until they are completed.
A callback's primary purpose is to execute code in response to an event.

These events might be user-initiated, such as mouse clicks or typing.
e.g. button.addEventListener('click', callback)
Example code

```js
function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}

function secondFunction() {
  console.log("Second function called");
}

firstFunction();
secondFunction();

// Output:
// Second function called
// First function called
```
