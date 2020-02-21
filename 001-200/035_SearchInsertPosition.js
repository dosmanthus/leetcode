/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

var searchInsert2 = function(nums, target) {
  // for loop
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([-3,3,5,6], 0));
