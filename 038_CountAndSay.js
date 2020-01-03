// 這是一個算完說出來的序列，序列如下：
// 1, 11, 21, 1211, 111221, ...
// 1     讀做 1個1， 所以下一個變成 11
// 11    讀做 2個1， 也就是21
// 21    讀做 1個2 1個1，得到1211
// 1211  1個1，1個2，2個1  111221

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay2 = function(n) {
  if (n === 1) return '1';
  // 遞迴函式（recursion），要知道報數數列的第n項，只需要知道其n-1項即可。
  let str = countAndSay(n - 1);
  let count = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      result += count;
      result += str[i];
      count = 1;
    }
  }

  return result;
};

var countAndSay = function(n) {
  if (n <= 1) return '1';
  let countSay = '1';

  for (let i = 2; i <= n; i++) {
    let number = countSay.charAt(0);
    let temp = countSay;
    let count = 1;

    countSay = '';

    for (let j = 1; j < temp.length; j++) {
      if (temp.charAt(j) === number) {
        count += 1;
      } else {
        countSay += count;
        countSay += number;
        number = temp.charAt(j);
        count = 1;
      }
    }

    countSay += count;
    countSay += number;
  }

  return countSay;
};

console.log(countAndSay(10))
