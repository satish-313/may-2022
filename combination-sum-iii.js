const combinationSum3 = (k, n) => {
  let min = (k * (k + 1)) / 2;

  const output = [];
  const combination = [];
  if (min > n) return output;

  function rec(n, k, out, comb, start, sum) {
    if (comb.length > k || start > n || sum > n) return;

    if (comb.length === k && n === sum) {
      out.push([...comb]);
      return;
    }

    for (let i = start; i >= 1; i--) {
      comb.push(i);
      start -= 1;
      sum += i;
      rec(n, k, out, comb, start, sum);
      comb.pop();
      sum -= i;
    }
  }

  rec(n, k, output, combination, n, 0);

  return output;
};

const combinationSum3r = (k, n) => {
  const min = (k * (k + 1)) / 2;
  if (min > n) return [];

  const result = [];
  const comb = [];

  function rec(n, k, result, comb, start, sum) {
    if (comb.length > k || sum > n || start > n) return;

    if (comb.length === k && sum === n) {
      result.push([...comb]);
      return;
    }

    for (let i = start; i >= 1; i--) {
      comb.push(i);
      start -= 1;
      sum += i;
      rec(n, k, result, comb, start, sum);
      comb.pop();
      sum -= i;
    }
  }
  let start = n > 9 ? 9 : n;
  rec(n, k, result, comb, start, 0);
  return result;
};

// console.log(combinationSum3(9, 60));
console.log(combinationSum3r(3, 20));
