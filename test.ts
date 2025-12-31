function reverseWords(s: string): string {
  return s
    .split(" ")
    .filter((word) => word !== "")
    .reverse()
    .join(" ");
}

reverseWords("the sky is blue");
reverseWords("  hello world  ");
reverseWords("a good  example");
