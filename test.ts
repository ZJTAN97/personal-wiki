function gcdOfStrings(str1: string, str2: string): string {
  let output = "";

  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1.charAt(i) === str2.charAt(j)) {
      output += str1.charAt(i);
    }
    i++;
    j++;
  }

  const remaining = str1.slice(i, str1.length);

  j = 0;

  let output2 = "";

  if(remaining.length === 0) {
    return output;
  }

  while (j < remaining.length) {
    if (output.charAt(j) == remaining.charAt(j)) {
      output2 += output.charAt(j);
    } else {
      output2 = "";
    }
    j++;
  }

  return output2;
}

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("AAAAAB", "AAA"));
console.log(
  gcdOfStrings(
    "TAUXXTAUXXTAUXXTAUXXTAUXX",
    "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
  )
);
