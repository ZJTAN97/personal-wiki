# Recursion

Recursion is a programming technique where a function calls itself within its own definition. It's used to solve problems that can be broken down into smaller, self-similar subproblems.

## How it works

Every recursive function must have two main parts:

1. `Base Case`: A condition that stops the recursion. Without a base case, the function would call itself indefinitely, leading to an infinite loop and eventually a stack overflow error.

2. `Recursive Step`: The part where the function calls itself, usually with modified arguments that move the problem closer to the base case.

## Example 1: Factorial Calculation

```js
function factorial(n) {
  // Base Case: Stop recursion when n is 0 or 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive Step: Call factorial with n - 1
  return n * factorial(n - 1);
}
```

## Example 2: Fibonacci Sequence

```js
function fibonacci(n) {
  // Base Cases: Stop recursion for the first two numbers
  if (n <= 1) {
    return n;
  }
  // Recursive Step: Sum of the two previous Fibonacci numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
