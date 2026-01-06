function findMaxAverage(nums: number[], k: number): number {
  let windowAverage = nums.slice(0, k).reduce((a, b) => a + b, 0) / k;
  let maxAverage = windowAverage;

  for (let i = k; i < nums.length; i++) {
    windowAverage = (windowAverage + nums[i] - nums[i - k]) / k;

    maxAverage = Math.max(maxAverage, windowAverage);
  }

  return maxAverage;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4); // 12.75
findMaxAverage([5], 1); // 5
