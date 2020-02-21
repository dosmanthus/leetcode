/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  const map = {
    "]": "[",
    ")": "(",
    "}": "{"
  }
  const lefts = ["[", "(", "{"];
  for (let i = 0; i < s.length; i++) {
    if (lefts.indexOf(s[i]) > -1) {
      stack.push(s[i])
    } else {
      if (map[s[i]] !== stack.pop()) return false
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid(""));
console.log(isValid("([]"));
console.log(isValid("]"));
