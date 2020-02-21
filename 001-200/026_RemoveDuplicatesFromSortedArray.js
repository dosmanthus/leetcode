// must do this by modifying the input array in-place with O(1) extra memory.
// O(1)：陣列讀取
// 時間複雜度為 O(1) 的演算法，代表著不管你輸入多少個東西，程式都會在同一個時間跑完。
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates3 = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

var removeDuplicates1 = function(nums) {
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[count] !== nums[i]) {
      count++;
      nums[count] = nums[i]
    }
  }

  return ++count;
};

var removeDuplicates2 = function(nums) {
  if (nums.length < 1) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j]
    }
  }
  return i+1;
};

console.log(removeDuplicates1([0,0,1,1,1,2,2,3,3,4])); // 5
console.log(removeDuplicates1([1,1,2])); // 2
