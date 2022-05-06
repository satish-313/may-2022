const removeDuplicates = (s, k) => {
  const stack = [];
  const ans = []

  for (let char of s) {
    if (stack.length > 0 && char === stack[stack.length - 1].split(",")[0]) {
      let [_, v] = stack[stack.length - 1].split(",");
      if (parseInt(v) === k - 1) {
        stack.pop();
      } else stack[stack.length - 1] = char + "," + parseInt(++v);
    } else stack.push(char + "," + 1);
  }

  for (let ele of stack){
    let [c,v] = ele.split(",");
    for (let i = 0 ; i < v; i++){
      ans.push(c)
    }
  }

  return ans.join("")
};

console.log(removeDuplicates("deeedbbcccbdaa", 3));
console.log(removeDuplicates("pbbcggttciiippooaais",2));
console.log(removeDuplicates("abcd",2))