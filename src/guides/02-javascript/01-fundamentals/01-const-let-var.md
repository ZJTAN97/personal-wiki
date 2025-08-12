# Difference between `Const`, `Let` and `Var`

## 1. `var`

- `var` declarations are globally scoped or function/locally scoped.
- scope is global `var` variable is declared outside a function.
- `var` function scoped when it is declared within a function (available and can be accessed only within that particular function).

```
console.log(greeter);
var greeter = "say hello";

// same as

var greeter;
console.log(greeter);
greeter = "Say hello";

```

## 2. `let`

- `let` is only available for use within that particular block
- REMEMBER a block is a chunk of code bounded by `{}`.

```
   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined
```

- `let` can be updated but not re-declared.

```
// example 1
let greeting = "say Hi";
greeting = "say Hello instead";


// example 2
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```

## 3. `const`

- `const` declarations are also block scoped.
- cannot be updated or re-declared.
