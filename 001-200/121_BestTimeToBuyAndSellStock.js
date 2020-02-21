/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 320 ms
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const element = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > element) {
        let profit = prices[j] - element;
        if (profit > maxProfit) maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

var maxProfit2 = function(prices) {
  // 增加flag，避免不必要的運算
  // 56 ms
  let maxProfit = 0;
  let buyPrice = 0;
  let sellPrice = 0;
  let changeBuyPrice = true;

  for (let i = 0; i < prices.length; i++) {
    if (changeBuyPrice) buyPrice = prices[i];
    sellPrice = prices[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit3 = function(prices) {
  // 52 ms
  let min = prices[0];
  let profit = 0;
  for(let i = 1; i < prices.length; i++){
    if (profit < prices[i] - min) profit = prices[i] - min;
    if (prices[i] < min) min = prices[i];
  }
  return profit;
};

console.log(maxProfit3([7,1,5,3,6,4])); // 5
console.log(maxProfit3([7,6,4,3,1])); // 0
