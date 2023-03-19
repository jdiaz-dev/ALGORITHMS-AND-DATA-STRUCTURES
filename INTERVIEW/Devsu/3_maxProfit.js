/* 
    - determine max range profit
*/
const profits = [-1, 9, 0, 8, -5, 6, -24];

const twoMaxProfits = (profits) => {
  const rangeValue = 0;

  const rangesAndIndexes = [];
  let range;
  for (let x = 0; x < profits.length - 1; x++) {
    for (let y = 1; y < profits.length; y++) {
      range =
        profits[x] > 0 && profits[y] > 0
          ? profits[x] - profits[y]
          : profits[x] + profits[y];
      rangesAndIndexes.push([range, [x, y]]);
    }
  }
  const rangesOrdered = rangesAndIndexes.sort(
    (first, second) => second[rangeValue] - first[rangeValue]
  );

  return rangesOrdered[0][1];
};
const res = twoMaxProfits(profits);
res;
