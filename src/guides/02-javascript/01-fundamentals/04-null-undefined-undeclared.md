# Difference between `null`, `undefined` and undeclared

Undeclared variables are created when you assign a value to an identifier that is not previously created using var, let, const. such a variable is defined globally, outside of the current scope. In strict mode, a ReferenceError will be thrown when you try to assin an undeclared variable. AVOID THIS.

`undefined` is a variable that is declared but not assigned a value. type of undefined.

`null` variables will have been explicitly assigned to the null value. It represents no value and is different from undefined in the sense that it has been explicitly assigned. if you use typeof(null) will return object
