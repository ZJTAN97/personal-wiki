function maxOperations(nums: number[], k: number): number {
  let operations = 0;

  const count: Record<number, number> = {};

  for (const num of nums) {
    const difference = k - num;
    if (count[difference] >= 1) {
      operations++;
      count[difference]--;
    } else {
      if (count[num]) {
        count[num]++;
      } else {
        count[num] = 1;
      }
    }
  }

  return operations;
}

maxOperations([1, 2, 3, 4], 5); // 2
