const backspaceCompare = (s, t) => {
  const stacks = [],
    stackt = [];

  for (let ele of s) {
    if (ele === "#") stacks.pop();
    else stacks.push(ele);
  }

  for (let ele of t) {
    if (ele === "#") stackt.pop();
    else stackt.push(ele);
  }

  if (stacks.length !== stackt.length) return false;

  for (let i = 0; i < stacks.length; i++) {
    if (stacks[i] !== stackt[i]) return false;
  }

  return true;
};

console.log(backspaceCompare("ab##", "c#d#"));
