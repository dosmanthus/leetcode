/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';

  // 以第一個字串爲基準
  let prefix = strs[0];
  for(let i = 0; i < strs.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      // 比對字母與prefix不同的話就回傳index
      if (prefix[j] !== strs[i][j]) {
        prefix = prefix.slice(0,j)
        // 可以直接slice copy array
      }
    }
  }
  return prefix;
};

console.log(longestCommonPrefix([]));
