// Factorial 階乘, 所有小於及等於該數的正整數的積，計為n!
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  // Iteration, 64 ms
  if (n < 5) return 0;
  // 5*2 = 10, 算階層內有幾個5出現
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;

  // recursion, Maximum call stack size exceeded
  // 遞歸： f(n) = n / 5 + f(n / 5)
  // return Math.floor(n / 5)  + trailingZeroes(Math.floor(n / 5));
};

var trailingZeroes2 = function(n) {
  // 60 ms
  let count = 0;
  // f(n) = n/5 + n/5^2 + n/5^3 + n/5^4 + n/5^5+..
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }

  return count;
};

console.log(trailingZeroes2(15)); // 7
