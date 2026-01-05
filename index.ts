function compress(chars: string[]): number {
  let counter = 0;

  let output = "";

  for (let index = 0; index < chars.length; index++) {
    counter++;

    if (chars[index] !== chars[index + 1]) {
      const numString = counter === 1 ? "" : counter.toString();

      output += chars[index] + numString;
      counter = 0;
    }
  }

  const output2 = output.split("");
  console.log(output2)

  return output.length;
}

function compress2(chars: string[]): number {
  let length = chars.length;
  let index = 0;
  while (index < length) {
    let count = 0;
    let start = index + 1;
    while (chars[index] === chars[index + 1]) {
      ++count;
      ++index;
    }
    if (count > 0) {
      const postfix = Number(count + 1).toString().split('');
      chars.splice(start, count, ...postfix);
      index = index - count + postfix.length;
      length = chars.length;
    }
    ++index;
  }

  console.log(chars)

  return chars.length;
};

compress(["a", "a", "b", "b", "c", "c", "c"]); // ["a","2","b","2","c","3"] a2b2c3 --> 6
compress(["a"]); // ["a"] a --> 1
compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]); // ["a","b","1","2"] ab12 --> 4

compress2(["a", "a", "b", "b", "c", "c", "c"]); // ["a","2","b","2","c","3"] a2b2c3 --> 6
compress2(["a"]); // ["a"] a --> 1
compress2(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]); // ["a","b","1","2"] ab12 --> 4
