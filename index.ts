function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const output: number[] = [];
  arr.forEach((n, id) => output.push(fn(n, id)));
  return output;
}