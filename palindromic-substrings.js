const countSubstring = (s) => {
  const len = s.length;
  let count = 0;

  const isPalindrome = (start, end, s) => {
    while (start <= end) {
      if (s[start++] !== s[end--]) return false;
    }
    return true;
  };

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (isPalindrome(i, j, s)) count += 1;
    }
  }

  return count;
};

// time complexity O(N^3) and space complexity O(1)
// console.log(countSubstring("aaa")); //6
// console.log(countSubstring("aaaaa")); // 15

const dpcountSubstring = (s) => {
  const len = s.length;
  let count = len;

  const dp = Array(len)
    .fill()
    .map(() => Array(len).fill(false));

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let l = 2; l <= len; l++) {
    for (let i = 0; i + l <= len; i++) {
      let j = i + l - 1;
      if (s[i] === s[j]) {
        if (j === i + 1 || dp[i + 1][j - 1]) {
          count += 1;
          dp[i][j] = true;
        }
      }
    }
  }

  return count;
};

// time complexity O(N^2) space complexity O(N^2)
// console.log(dpcountSubstring("abc")); // 3
// console.log(dpcountSubstring("aabbxx")); // 9
// console.log(dpcountSubstring("aaaaa")); // 15

