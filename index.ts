function calculate(s: string): number {
  // initialize stack as empty array
  const stack: number[] = [];

  // initialize num for adding number and prevOperator to track Math operator
  let num: string = "";
  let prevOperator: string = "+";

  // run for loop from index 0 to length of s
  for (let i = 0; i <= s.length; i++) {
    // initialize char as s[i]
    const char: string = s[i];

    // i char is greater than or equal to "0" and less than or equal to "9"
    // this handles scenarios like double digits numbers e.g. 13, 15, 42
    if (char >= "0" && char <= "9") {
      // add char in num and continue for loop
      num += char;
      continue;
    }

    // if char is less than "0" or char is greater than "9" and char is not equal to " " space or i is equal to length of s
    if (((char < "0" || char > "9") && char !== " ") || i === s.length) {
      switch (prevOperator) {
        case "+": {
          stack.push(Number(num));
          break;
        }
        case "-": {
          stack.push(-Number(num));
          break;
        }
        case "*": {
          stack.push(Number(stack.pop()) * Number(num));
          break;
        }
        case "/": {
          stack.push(Math.trunc(Number(stack.pop()) / Number(num)));
          break;
        }
      }

      // update prevOperator with char and num with "" empty string
      prevOperator = char;
      num = "";
    }
  }

  // do sum of the all the number from stack and return it
  return stack.reduce((total, value) => total + value, 0);
}

console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
