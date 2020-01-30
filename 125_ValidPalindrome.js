/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 108 ms
  let string = s.replace(/\W/g, "").toLowerCase();
  let reversed = string.split('').reverse().join('');
  return string === reversed;
};

var isPalindrome2 = function(s) {
  // 88 ms
  let string = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] === string[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome2("A man, a plan, a canal: Panama"));
// console.log(isPalindrome2("ab@a"));
