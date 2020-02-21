/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne2 = function (digits) {
  digits[digits.length - 1] += 1;
  if (digits[digits.length - 1] === 10) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] === 10) {
        if (i === 0) {
          digits.unshift(1);
          i += 1;
        } else {
          digits[i - 1] += 1;
        }
        digits[i] = 0;
      }
    }
  }

  return digits;
};

var plusOne = function (digits) {
  const lastIndex = digits.length - 1;
  let carry = 0;
  digits[lastIndex] += 1;

  for (let i = lastIndex; i >= 0; i--) {
    digits[i] += carry;
    if (digits[i] === 10) {
      digits[i] = 0;
      carry = 1;
    } else {
      carry = 0;
    }
  }

  if (carry === 1) digits.unshift(1);

  return digits;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne3 = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  return [1, ...digits];
};


// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(plusOne([1, 2, 9])); // [1,3,0]
console.log(plusOne([9])); // [1,0]
