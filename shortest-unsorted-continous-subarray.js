const findUnsortedSubarray = () => {
  let end = 0;
  let prev = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < prev) end = i;
    else prev = nums[i];
  }

  let start = nums.length - 1;
  prev = nums[start];

  for (let i = start; i >= 0; i--) {
    if (prev < nums[i]) start = i;
    else prev = nums[i];
  }

  if (end != 0) return end - start + 1;
  else return 0;
};

/* is one I copied i don't know to solve */