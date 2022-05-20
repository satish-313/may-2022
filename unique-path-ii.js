const uniquePathWithObstacle = (obstacleGrid) => {
  const dp = new Array(obstacleGrid.length).fill().map(() => new Array(obstacleGrid[0].length).fill(0));

  if (obstacleGrid[0][0] === 1) return 0;

  dp[0][0] = 1;

  for (let i = 1; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === 1) continue;
    dp[0][i] = dp[0][i - 1];
  }
 
  for (let i = 1; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 1) continue;
    dp[i][0] = dp[i - 1][0];
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) continue;
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  return dp[obstacleGrid.length-1][obstacleGrid[0].length-1];
};

console.log(
  uniquePathWithObstacle([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

console.log(
  uniquePathWithObstacle([
    [0, 1],
    [0, 0],
  ])
);
