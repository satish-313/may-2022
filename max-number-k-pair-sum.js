const maxOperations = (nums, k) => {
  let result = 0, l = 0, r = nums.length - 1;
  nums.sort((a, b) => a - b);

  while (l < r) {
    let sum = nums[l] + nums[r];

    if (sum === k) {
      result += 1;
      l += 1;
      r -= 1;
    } else if (sum < k) {
      l += 1;
    } else r -= 1;
  }

  return result
};

console.log(maxOperations([1, 2, 3, 4], 5));
