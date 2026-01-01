const nums = [0, 1, 0, 3, 12];
const nums2 = [0, 0, 1];

function moveZeroes(nums: number[]): void {
  let leftPointer = 0;
  let temp: number;

  for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
    if (nums[rightPointer] !== 0) {
      temp = nums[leftPointer];
      nums[leftPointer] = nums[rightPointer];
      nums[rightPointer] = temp;

      leftPointer++;
    }
  }
}

moveZeroes(nums);
// moveZeroes(nums2);

console.log(nums);
// console.log(nums2);
