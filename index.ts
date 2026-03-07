function reverseWords(s: string): string {
  const currentWordStack: string[] = [];

  let currentWord = "";

  for (let index = 0; index < s.length; index++) {
    if (s[index] !== " ") {
      currentWord += s[index];
    } else {
      if (currentWord !== "") {
        currentWordStack.push(currentWord);
        currentWord = "";
      }
    }
  }

  console.log(currentWordStack);

  return currentWordStack.reduce((a, b) => `${b} ${a}`);
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
