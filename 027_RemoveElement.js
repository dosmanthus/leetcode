// 原地算法（in-place algorithm）
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
  if(nums.length === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

var removeElement2 = function(nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) nums.splice(i, 1);
  }
  return nums.length;
};

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))
