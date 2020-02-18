/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 60 ms
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    if (map.get(nums[i]) > (nums.length / 2)) return nums[i];
  }
};

var majorityElement2 = function(nums) {
  // 76 ms
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

console.log(majorityElement([2,2,1,1,1,2,2])); // 2
