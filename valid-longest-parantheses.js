const longestValidParentheses = (str) => {
  if (str.length === 0) return 0;
  const stack = [];
  let longest = 0;
  let left = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "(") stack.push(i);
    else {
      if (stack.length > 0 && str.charAt(stack[stack.length - 1]) === "(") {
        stack.pop();
      } else stack.push(i);
    }
  }

  if ( stack.length === 0) return str.length
  for (let i = 0; i < stack.length; i++) {
    if (i + 1 === stack.length && i < str.length) {
      if (stack[i] === str.length-1)
        longest = Math.max(longest, str.length - left - 1);
      else longest = Math.max(longest, str.length - stack[i] - 1);
    }
    longest = Math.max(longest, stack[i] - left);
    left = stack[i] + 1;
  }

  return longest;
};

console.log(longestValidParentheses("()(()()("));
console.log(longestValidParentheses(")()()"));
console.log(longestValidParentheses("()(())"))
