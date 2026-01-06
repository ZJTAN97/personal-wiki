type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    return functions.reduceRight((prev, current) => current(prev(x)));
  };
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);

console.log(fn(4));

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9

*/

// Call function once

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  let counter = 0;

  if (counter !== 0) {
    return undefined;
  }

  return function (...args) {
    counter++;
    return args.reduce((a, b) => a + b);
  };
}

once(() => []);
