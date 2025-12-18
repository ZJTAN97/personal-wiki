function twoSum(nums: number[], target: number): number[] {
  const hashmap: Record<number, number> = {};
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    hashmap[i] = nums[i];
  }

  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
