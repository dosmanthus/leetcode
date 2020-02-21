/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // 252 ms
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
};

var twoSum2 = function(numbers, target) {
  // 60 ms
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(numbers[i])) {
      return [map.get(numbers[i]) + 1, i + 1];
    }
    map.set((target - numbers[i]), i);
  }
};

var twoSum3 = function(numbers, target) {
  // 56 ms, 雙指針，時間複雜度：O(n)；空間複雜度：O(1)
  let left = 0;
  let right = numbers.length - 1;

  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }

  return [left + 1, right + 1];
};

console.log(twoSum2([2,7,11,15], 9)); // [1, 2]
