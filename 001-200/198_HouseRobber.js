/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // Dynamix Programing, 48 ms
  // ref: https://blog.csdn.net/weixin_43438700/article/details/88802309
  if (nums.length === 0) return 0;

  let n = nums.length;
  let max = new Array(n);
  max[0] = nums[0];
  max[1] = Math.max(max[0], nums[1]); // 搶第0間還是第1間比較多錢
  for (let i = 2; i < n; i++) {
    max[i] = Math.max(max[i - 1], max[i - 2] + nums[i]);
  }
  return max[n - 1];
};

console.log(rob([1,2,3,1])); // 4
console.log(rob([2,7,9,3,1])); // 12
console.log(rob([2,1,1,2])); // 4
