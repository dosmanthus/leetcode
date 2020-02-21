/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  // 44 ms
  const charArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  if (n <= 26) {
    return charArray[n - 1].toUpperCase();
  } else {
    let result = [];
    while (n > 26) {
      let m = n % 26;
      result.unshift(m == 0 ? charArray[25] : charArray[m - 1]);
      n = Math.ceil(n / 26) - 1;
    }
    result.unshift(charArray[n - 1]);
    return result.join("").toUpperCase();
  }

};

var convertToTitle2 = function (n) {
  // recursion, 52ms
  let m = ((n - 1) % 26);
  return n < 27 ? getChar(m) : (
    convertToTitle2(Math.floor((n - 1) / 26)) +
    getChar(m)
  );

  function getChar(num) {
    // 65 => A
    return String.fromCharCode(num + 65);
  }
};

console.log(convertToTitle2(28)); // AB
console.log(convertToTitle2(701)); // ZY
