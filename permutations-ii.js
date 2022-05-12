const permuateUnique = (nums) => {
  const result = [];
  const comb = [];
  const set = new Set();
  nums.sort((a,b) => a -b);

  function rec(result, comb, nums, set) {
    if (comb.length === nums.length) {
      result.push([...comb]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (set.has(i)) continue;
      comb.push(nums[i]);
      set.add(i);
      rec(result, comb, nums, set);
      let out = comb.pop();
      set.delete(i);
      while (i < nums.length - 1 && out === nums[i + 1]) {
        i += 1;
      }
    }
  }

  rec(result, comb, nums, set);

  return result;
};

console.log(permuateUnique([1, 2, 3]));
console.log(permuateUnique([3,3,0,3]))
