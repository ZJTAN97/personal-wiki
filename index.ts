function myAtoi(s: string): number {
  let index = 0;
  let result = "";
  let isNegative = false;

  const UPPER_LIMIT = 2 ** 31 - 1;
  const LOWER_LIMIT = -(2 ** 31);

  while (s[index] === " ") {
    index++;
  }

  if (s[index] === "+" || s[index] === "-") {
    isNegative = s[index] === "-";
    index++;
  }

  for (let i = index; i < s.length; i++) {
    const number = s.charCodeAt(i) - 48; // only takes in 0-9

    if (number < 0 || number > 9) {
      break;
    } else {
      result = result + s[i];
    }
  }

  const output = isNegative ? -1 * Number(result) : Number(result);

  return output > UPPER_LIMIT
    ? UPPER_LIMIT
    : output < LOWER_LIMIT
      ? LOWER_LIMIT
      : output;
}

console.log(myAtoi("42"));
console.log(myAtoi(" -042"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("words and 987"));
