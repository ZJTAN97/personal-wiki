function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left !== right) {

    result = Math.max(
      result,
      (right - left) * Math.min(height[left], height[right])
    );

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  console.log(result);

  return result;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
maxArea([1, 2, 1]); // 2
