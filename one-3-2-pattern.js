const find123Pattern = (nums) => {
  if (nums.length < 2) return false;
  const stack = [];
  let thirdEl = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < thirdEl) return true;
    while (stack.length > 0 && stack[stack.length - 1] < nums[i])
      thirdEl = stack.pop();
    stack.push(nums[i]);
  }
  return false;
};

console.log(find123Pattern([1, 3, 2, 4, 5, 6, 7, 8, 9, 10]));
