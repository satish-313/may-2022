const coinChange = (coins, amount) => {
  if (amount === 0) return 0;
  coins.sort((a, b) => b - a);

  function rec(amount, coins, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount < 0) return null;
    if (amount === 0) return [];
    let comb = null;

    for (let ele of coins) {
      let reduceAmount = amount - ele;
      let result = rec(reduceAmount, coins);
      if (result !== null) {
        if (comb === null || comb.length > result.length)
          comb = [...result, ele];
      }
    }

    memo[amount] = comb;
    return comb;
  }

  let r = rec(amount, coins);
  return r.length;
};

// console.log(coinChange([2, 5], 10));

const coinChangeBack = (coins, amount) => {
  if (amount === 0) return 0;
  coins.sort((a, b) => b - a);
  const coin = [];
  const bestCoin = [[]];

  function rec(amount, coins, coin, bestCoin) {
    if (amount < 0) return;
    // if (bestCoin[0].length !== 0 && coin.length > bestCoin[0].length) return;
    if (amount === 0) {
      if (bestCoin[0].length === 0) {
        bestCoin[0] = [...coin];
      } else if (bestCoin[0].length > coin.length) bestCoin[0] = [...coin];
      return;
    }

    for (let ele of coins) {
      let reduceAmount = amount - ele;
      coin.push(ele);
      if (bestCoin[0].length !== 0 && coin.length > bestCoin[0].length) break;
      rec(reduceAmount, coins, coin, bestCoin);
      coin.pop();
    }
  }

  rec(amount, coins, coin, bestCoin);
  console.log(bestCoin[0]);
  return bestCoin[0].length === 0 ? -1 : bestCoin[0].length;
};

// console.log(coinChangeBack([1, 2, 5], 100));
console.log(coinChangeBack([186, 419, 83, 408], 6249));
