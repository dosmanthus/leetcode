/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  // 84 ms
  const charNumber = {};
  const charArray = "abcdefghijklmnopqrstuvwxyz".split('');
  for (let i = 0; i < charArray.length; i++) {
    charNumber[charArray[i].toUpperCase()] = i + 1;
  }

  if (s.length === 1) {
    return charNumber[s];
  } else {
    const sArray = s.split('').reverse();
    let sum = 0;
    for (let i = 0; i < sArray.length; i++) {
      sum += (charNumber[sArray[i]]) * (26 ** i);
    }
    return sum;
  }
};

var titleToNumber2 = function(s) {
  // 68 ms
  // ANSI Code: A => 65
  // 26進位 => 26**n
  let sum = 0,
      power = 0;

  for (i = s.length - 1; i >= 0; i--) {
    sum += (s.charCodeAt(i) - 64) * (26**power++)
  }

  return sum;
};

console.log(titleToNumber2("AB")); // 28
console.log(titleToNumber2("ZY")); // 701
console.log(titleToNumber2("SRY")); // 13337
