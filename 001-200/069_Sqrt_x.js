// ES5 Math.sqrt(x)
// ES6 x ** 0.5 => Math.pow(x, 0.5);

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 解法1: 暴力破解從 1 ~ x 找出n的平分小於等於x，n+1的平分大於x，for loop。時間複雜度：O(n)簡易搜尋
  // 解法2: Binary Search, 時間複雜度： O(log n)二分搜尋
  // 當輸入的數量是 n 時，執行的步驟數會是 log n。
  // log 都是以二為底。當 log n = x 的意思是 n = 2^x，
  // 舉例來說，當 n = 4，程式會在 2 個步驟完成（4 = 2²）；
  // n = 16 時，程式會在 4 個步驟完成（16 = 2⁴），以此類推。
  if(x < 0) return -1;
  let low = 1;
  let high = x;

  while (low <= high) {
    let mid = Math.floor(low + ((high - low) / 2));

    if (mid ** 2 <= x) {
      if ((mid + 1) ** 2 > x || mid === high) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else {
      high = mid - 1;
    }
  }

  return 0;
};

console.log(mySqrt(8))
