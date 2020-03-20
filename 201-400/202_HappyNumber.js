/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  // 60 ms
  while (n > 6) {
    let numArray = n.toString().split('');
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
      const element = parseInt(numArray[i], 10);
      sum += element * element;
    }
    n = sum;
  }
  return n === 1;
};

var isHappy2 = function(n) {
  // 60 ms
  // 使用一個map儲存計算過的數字，如果目前的數字已經計算過，表示無窮迴圈出現，return false。
  let map = new Map();
  while (!map.has(n) && n !== 1) {
    map.set(n, n);
    n.toString().split('').forEach((element, i) => {
      if (i === 0) n = 0;
      n += Math.pow(parseInt(element, 10), 2);
    });
  }
  return n === 1;
};

console.log(isHappy2(19)); // true
console.log(isHappy2(7)); // true
