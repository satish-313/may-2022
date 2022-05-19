const longestIncreasingPath = (matrix) => {
  const dp = new Array(matrix.length)
    .fill()
    .map(() => new Array(matrix[0].length).fill(-1));
  let max = 0;

  const dfs = (m, i, j, max, dp, prev) => {
    if (i < 0 || i >= m.length || j < 0 || j >= m[0].length) return max;
    let cur = m[i][j];
    if (prev !== undefined && cur <= prev) return max;
    if (dp[i][j] !== -1) return dp[i][j] + max;

    max = Math.max(
      1 + dfs(m, i + 1, j, max, dp, cur),
      1 + dfs(m, i - 1, j, max, dp, cur),
      1 + dfs(m, i, j + 1, max, dp, cur),
      1 + dfs(m, i, j - 1, max, dp, cur)
    );

    dp[i][j] = max;
    return max;
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      max = Math.max(max, dfs(matrix, i, j, 0, dp));
    }
  }

  return max;
};

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ])
);
