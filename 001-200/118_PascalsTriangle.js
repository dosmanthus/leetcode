/** 帕斯卡三角形的數學祕密
 * https://www.youtube.com/watch?time_continue=86&v=XMriWTvPXHI&feature=emb_title
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  // 52 ms
  if (numRows === 0) return [];
  let result = [[1]];
  let row = [1];

  for (let i = 0; i < numRows - 1; i++) {
    let temp = [0];
    for (let j = 0; j < row.length; j++) {
      temp.push(row[j]);
    }
    temp.push(0);
    row = [];
    for (let l = 1; l < temp.length; l++) {
      row.push(temp[l] + temp[l - 1]);
    }
    result.push(row);
  }

  return result;
};

var generate2 = function(numRows) {
  // 44 ms
  if (numRows === 0) return [];
  let result = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRow = result[i-1];
    let currRow = [1];

    for (let j = 1; j <= i; j++) {
      let left = prevRow[j-1];
      let right = prevRow[j] || 0;
      currRow.push(left + right);
    }

    result.push(currRow);
  }

  return result;
};

console.log(generate2(5));
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

