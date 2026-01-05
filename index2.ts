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
