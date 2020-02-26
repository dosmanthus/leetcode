/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // 56 ms
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
