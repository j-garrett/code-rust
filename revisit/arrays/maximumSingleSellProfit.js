/*
Given a list of stock prices for n days, find the maximum profit with a single buy/sell activity
input of [8, 5, 12, 9, 19, 1] should return 14
  best buy would be 5
  best sell would be 19

Edge case: if there is no profit to be made, we want to minimize loss
[21, 12, 11, 9, 6, 3] should return -1
  best buy would be 12
  best sell would be 11
*/

const findSingleSell = (arr) => {
  // we will use 3 trackers
  // 1st for lowest price (starting with 0 index)
  // 2nd for tracking biggest increase
  // 3rd for tracking smallest decrease
  let lowestPurchase = arr[0];
  let highestSale = arr[arr.length - 1];
  let bestProfit = highestSale - lowestPurchase;

  let curProfit = 0;
  for (var i = 1; i < arr.length; i++) {
    curProfit = arr[i] - lowestPurchase;

    if (curProfit > bestProfit) {
      bestProfit = curProfit;
      highestSale = arr[i];
    }
    if (lowestPurchase > arr[i]) {
      lowestPurchase = arr[i];
    }
  }
  return bestProfit;
};

console.log(findSingleSell([8, 5, 12, 9, 19, 1]));
console.log(findSingleSell([8, 12, 9, 5, 19, 1]));
console.log(findSingleSell([8, 5, 19, 12, 19, 1]));

console.log(findSingleSell([21, 12, 11, 9, 6, 3]));



