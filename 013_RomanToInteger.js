/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let arr = s.split("");
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  arr.forEach((element, index) => {
    let next = arr[index + 1];

    // if (
    //   (element == 'I' && (next == 'V' || next == 'X'))
    //   || (element == 'X' && (next == 'L' || next == 'C'))
    //   || (element == 'C' && (next == 'D' || next == 'M'))
    // ) {
    //   sum -= symbols[element];
    // } else {
    //   sum += symbols[element]
    // };

    symbols[element] < symbols[next] ? sum -= symbols[element] : sum += symbols[element];

  });

  return sum;
};

// 網友解法
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function(romanString) {
  const romanToIntMapping = {
      'I': 1,
      '$': 4,
      'V': 5,
      '(': 9,
      'X': 10,
      '#': 40,
      'L': 50,
      '@': 90,
      'C': 100,
      '^': 400,
      'D': 500,
      '!': 900,
      'M': 1000
  }
  return romanString
      .replace('IV', '$')
      .replace('IX', '(')
      .replace('XL', '#')
      .replace('XC', '@')
      .replace('CD', '^')
      .replace('CM', '!')
      .split('')
      .reduce((finalValue, currentValue) => finalValue + romanToIntMapping[currentValue], 0)
};

console.log(romanToInt2("III"));
console.log(romanToInt2("IV"));
console.log(romanToInt2("IX"));
console.log(romanToInt2("LVIII"));
console.log(romanToInt2("MCMXCIV"));
