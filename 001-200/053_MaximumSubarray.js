// 動態規劃（Dynamic Programming, DP）是一種將複雜問題分解成更小的子問題來解決的最佳化技術。
// 使用動態規劃解決問題時必須遵守三步驟：
// 定義子問題
// 實作要反覆執行而解決的子問題部分
// 識別並求解基本狀況

// 動態規劃經典案例：
// 背包問題
// 最常公共子序列
// 矩陣鏈相乘
// 圖形的全點對最短路徑
// 最少硬幣找零問題
// https://blog.kdchang.cc/2016/09/27/javascript-data-structure-algorithm-advance/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
  // Runtime: 220 ms, faster than 6.32% of JavaScript online submissions for Maximum Subarray.
  // Memory Usage: 34.9 MB, less than 98.15% of JavaScript online submissions for Maximum Subarray.
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = sum = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > current) {
        current = sum;
      }
    }

    if (current > max) {
      max = current;
    }
  }

  return max;
};

var maxSubArray2 = function(nums) {
  // Runtime: 60 ms, faster than 68.46% of JavaScript online submissions for Maximum Subarray.
  // Memory Usage: 35.2 MB, less than 75.93% of JavaScript online submissions for Maximum Subarray.
  if (nums.length === 0) return 0;

  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(sum, max);
    sum = sum < 0 ? 0 : sum;
  }

  return max;
};

var maxSubArray3 = function(nums) {
  // DP
  // 在當前的位置最優解只有2種
  // 1. 前面的總合
  // 2. 重新開始

  if (nums.length === 0) return 0;

  let dp = new Array(nums.length);
  dp[0] = nums[0];
  let max = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(dp[i], max);
  }

  return max;
};

var maxSubArray = function(nums) {
  // DP
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }

  return Math.max(...nums);
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([-5,1,-3,4,-2,4,1])); // 7
console.log(maxSubArray([-1, -2])); // -1
