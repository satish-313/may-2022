const letterCombination = (digit) => {
  const output = [];
  const combination = [];
  if (digit.length === 0) return output;

  const letter = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function rec(digit, index, com, out) {
    if (com.length === digit.length) {
      out.push(com.join(""));
      return;
    }

    if (index >= digit.length) return;
    let number = digit[index];
    let l = letter[number];

    for (let ele of l) {
      com.push(ele);
      index += 1;
      rec(digit, index, com, out);
      index -= 1;
      com.pop();
    }
  }

  rec(digit, 0, combination, output);

  return output;
};

console.log(letterCombination(""));
