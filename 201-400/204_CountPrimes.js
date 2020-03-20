/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  // 380 ms
  if (n < 3) return 0;

  let count = 1;
  for (let i = 3; i < n; i += 2) {
    let flag = true;
    for (let j = 3; j * j <= i; j += 2) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }

    if (flag) count += 1;
  }

  return count;
};

var countPrimes2 = function(n) {
  // 84 ms, 埃拉托斯特尼篩法
  // 給出要篩數值的範圍n，找出n的平方根以內的質數。
  // 先用2去篩，即把2留下，把2的倍數剔除掉；再用下一個質數，也就是3篩，把3留下，把3的倍數剔除掉；接下去用下一個質數5篩，把5留下，把5的倍數剔除掉；不斷重複下去......。
  let count = 0;
  let signs = new Array(n);

  for (let i = 2; i < n; i++) {
    if (!signs[i - 1]) {
      count++;

      for (let j = i * i; j <= n; j += i) {
        signs[j - 1] = true;
      }
    }
  }

  return count;
};

console.log(countPrimes2(10)); // 4
