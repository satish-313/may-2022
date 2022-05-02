const sortArrayByParity = (nums) => {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let t = nums[k];
      nums[k] = nums[i];
      nums[i] = t;
      k += 1;
    }
  }

  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
