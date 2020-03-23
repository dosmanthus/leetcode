/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  // 68 ms
  if (s.length !== t.length) return false;
  if (s === t) return true;

  const map = new Map();
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      if (set.has(t[i])) return false; // 字母已經使用過
      map.set(s[i], t[i]);
      set.add(t[i]);
    }
  }

  return true;
};

console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('ab', 'aa')); // false
