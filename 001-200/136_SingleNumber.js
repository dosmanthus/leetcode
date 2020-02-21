/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 84 ms
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};

var singleNumber2 = function(nums) {
  // 60 ms
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

console.log(singleNumber2([2,2,1])); // 1
console.log(singleNumber2([4,1,2,1,2])); // 4
