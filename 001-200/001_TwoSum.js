/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // ES6中如果希望物件的key不會重複，可以使用map
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const element = target - nums[i];
    if (map.has(element)) {
      return [map.get(element), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return [];
};

var result = twoSum([-1,-2,-3,-4,-5], -8); // return [0, 1]
console.log(result);
