const countVowelString = (n) => {
  const arr = Array(n + 1)
    .fill()
    .map(() => Array(5).fill(0));
  let result = 0;

  for (let i = 1; i < 5; i++) {
    arr[1][i] = 1;
  }

  for (let i = 1; i <= n; i++) {
    arr[i][4] = 1;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 3; j >= 0; j--) {
      arr[i][j] = arr[i - 1][j] + arr[i][j + 1];
    }
  }

  for (let i = 0; i < 5; i++) {
    result += arr[n][i];
  }

  return result;
};

console.log(countVowelString(3));
