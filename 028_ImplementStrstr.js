/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '' || haystack === needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let subString = haystack.substring(i, i + needle.length);
      if (subString === needle) return i;
    }
  }

  return -1;
};

console.log(strStr("hello", "ll")) // 2
console.log(strStr("aaaaa", "bba")) // -1
console.log(strStr("mississippi", "issip")) // 4
