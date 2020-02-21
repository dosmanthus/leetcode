/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const aLength = a.length;
  const bLength = b.length;

  let aArray = a.split('').reverse();
  let bArray = b.split('').reverse();

  const target = aLength >= bLength ? aArray: bArray;
  const sub = aLength >= bLength ? bArray : aArray;

  for (let i = 0; i < target.length; i++) {
    target[i] = parseInt(target[i], 10) + (parseInt(sub[i], 10) || 0);

    if (target[i] >= 2) {
      target[i] = target[i] - 2 > 0 ? target[i] - 2 : 0;
      if (i === target.length - 1) {
        target.push(1);
      } else {
        target[i + 1] = parseInt(target[i + 1], 10) + 1;
      }
    }
  }

  return target.reverse().join('');
};

var addBinary2 = function(a, b) {
  // 在比較短的字串前面補0
  const aLength = a.length;
  const bLength = b.length;
  let aArray = a.split('');
  let bArray = b.split('');
  let result = [];
  let carry = 0;

  if (aLength > bLength) {
    for (let i = 0; i < aLength - bLength; i++) {
      bArray.unshift(0);
    }
  } else {
    for (let i = 0; i < bLength - aLength; i++) {
      aArray.unshift(0);
    }
  }

  for (let i = Math.max(aLength, bLength) - 1; i >= 0; i--) {
    let sum = Number(aArray[i]) + Number(bArray[i]) + carry;
    result.unshift(sum % 2);
    carry = Math.floor(sum / 2);
  }

  if (carry) result.unshift(1);

  return result.join('');
};

console.log(addBinary('11', '1')); // "100"
console.log(addBinary('1010', '1011')); // "10101"
