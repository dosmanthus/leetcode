// 費氏數列  O(2^n)
// 每往下一層，步驟數變 2 倍，總共有 n 層。
// 加速計算費氏數列的演算法：用空間換取時間
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let map = new Map();
    if (n > 3) {
      if (map.has(n)) {
        return map.get(n);
      } else {
        let result = climbStairs(n-1) + climbStairs(n-2);
        map.set(n, result);
        return result;
      }
    }
    return n;
};

// 動態規劃
// 時間複雜度為O(n) 空間複雜度為O(1)
// 動態規劃的過程，就是反覆地讀取數據、計算數據、儲存數據。
var climbStairs2 = function(n) {
  if (n > 2) {
    let a = 1;
    let b = 2;
    let temp = 0;

    for (let i = 3; i < n + 1; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }

    return temp;
  }
  return n;
};

console.log(climbStairs(30)) // Time Limit Exceeded
console.log(climbStairs2(30))
