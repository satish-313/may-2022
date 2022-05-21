const coinChange = (coins, amount) => {
  if (amount === 0) return 0;
  coins.sort((a, b) => b - a);

  function rec(amount, coins, memo = {}) {
    if (amount in memo) return memo[amount]
    if (amount < 0) return null;
    if (amount === 0) return [];
    let comb = null;

    for (let ele of coins) {
      let reduceAmount = amount - ele;
      let result = rec(reduceAmount, coins);
      if (result !== null) {
        if ( comb === null || comb.length > result.length)
        comb = [...result, ele];
      }
    }
    
    memo[amount] = comb
    return comb;
  }
  
  let r = rec(amount, coins)
  return r.length;
};

console.log(coinChange([2, 5], 10));
