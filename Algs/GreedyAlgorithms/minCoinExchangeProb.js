//todo: Find minimum coins to reach the value:

const findMinCoins = (coins, value) => {
  const result = [];
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    while (value >= coins[i]) {
      value -= coins[i];
      result.push(coins[i]);
      count++;
    }

    if (value === 0) {
      break;
    }
  }

  return result;
};

console.log(findMinCoins([25, 20, 10, 5], 105)); // [ 25, 25, 25, 25, 5 ]
console.log(findMinCoins([25, 20, 10, 5], 40)); // [ 25, 10, 5 ] //! Problem is that greedy algorithm not always gives the optimal result!
