function findMaxAverage(nums: number[], k: number): number {
  if (nums.length === 1) return nums[0];

  let maxAverage = 0;

  let windowAverage = nums.slice(0, k).reduce((a, b) => a + b, 0);

  maxAverage = windowAverage / k;

  for (let i = k; i < nums.length; i++) {
    windowAverage += nums[i] - nums[i - k];
    maxAverage = Math.max(maxAverage, windowAverage / k);
  }

  console.log(maxAverage);

  return maxAverage;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4); // 12.75
findMaxAverage([5], 1); // 5
findMaxAverage([3, 3, 4, 3, 0], 3);
