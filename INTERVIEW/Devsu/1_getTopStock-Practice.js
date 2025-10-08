const stockIndex = 0,
  priceIndex = 1;

function fixDecimalIssue(number) {
  return (number * 100) / 100;
}

function sortHigherToLowerPrices(first, second) {
  return first[priceIndex] > second[priceIndex] ? -1 : 1;
}

function calculatePriceAverages(prices) {
  const priceAverages = [];
  for (let x = 0; x < prices[0].length; x++) {
    let average = 0;

    for (let y = 0; y < prices.length; y++) {
      average = fixDecimalIssue(
        fixDecimalIssue(average) + fixDecimalIssue(prices[y][x])
      );
    }
    priceAverages.push(
      parseFloat(fixDecimalIssue(average / fixDecimalIssue(3)).toFixed(2))
    );
  }
  return priceAverages;
}

function getTopStocks(stock, prices) {
  const priceAverages = calculatePriceAverages(prices);
  //   priceAverages
  const stockSorted = priceAverages
    .map((price, index) => [stock[index], price])
    .sort(sortHigherToLowerPrices)
    .map((item) => item[stockIndex]);
  //   stockSorted;
  return stockSorted.slice(0, 3);
}

const stock = ["AMZN", "CACC", "EQIX", "GOOG", "ORLY", "ULTA"];

// price history over time
const prices = [
  [12.81, 11.09, 12.11, 10.39, 9.83, 8.14],
  [10, 34, 10.56, 10.14, 12.56, 9.77, 11, 66],
  [15, 56, 14, 34, 13.56, 18.34, 17.34, 16.88],
];

const res = getTopStocks(stock, prices);
res;
