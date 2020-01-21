/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  // 60 ms
  let row = [1]
  for (let i = 1; i <= rowIndex; i++) {
    let tempRow = row.slice();
    for (let j = 1; j <= rowIndex; j++) {
      row[j] = tempRow[j - 1] + (tempRow[j] || 0);
    }
  }
  return row
};

var getRow2 = function(rowIndex) {
  // use only O(k) extra space
  let row = [1]
  for (let i = 1; i <= rowIndex; i++) {
    let prev = row[i-1];
    for (let j = 1; j < i; j++) {
      let curr = row[j] || 0;
      row[j] = prev + curr;
      prev = curr;
    }
    row.push(1)
  }
  return row
}

console.log(getRow2(5));
