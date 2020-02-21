/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] === 0) {
      if (nums[j] !== 0) {
        nums[i] = nums[j]
        nums[j] = 0;
        i++;
      }
    } else {
      i++;
    }
  }
  return nums;
};

var moveZeroes2 = function(nums) {
  let temp = null;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
  return nums;
};

console.log(moveZeroes2([0,1,0,3,12]))
