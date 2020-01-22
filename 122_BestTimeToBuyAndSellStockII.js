/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 60 ms
  let profit = 0;
  let buyPrice = 0;
  let sellPrice = 0;
  let changeBuyPrice = true;

  for (let i = 0; i < prices.length - 1; i++) {
    if (changeBuyPrice) buyPrice = prices[i];
    sellPrice = prices[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else if (prices[i + 2] > sellPrice) {
      // 如果繼續上漲
      changeBuyPrice = false;
    } else {
      // 如果下跌，結算profit
      profit += (sellPrice - buyPrice);
      changeBuyPrice = true;
    }
  }

  return profit;
};

var maxProfit2 = function(prices) {
  // 60 ms
  let profit = 0;
  let min = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else {
      profit += (prices[i] - min);
      min = prices[i]
    }
  }

  return profit;
}

console.log(maxProfit([7,1,5,3,6,4])); // 7
console.log(maxProfit([1,2,3,4,5])); // 4
console.log(maxProfit([7,6,4,3,1])); // 0
