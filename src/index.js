module.exports = function check(str, bracketsConfig) {
  const brackP = new Map();
  const brackOpen = [];
  const stack = [];

  bracketsConfig.forEach(([elOpen, elClose]) => brackP.set(elClose, elOpen));
  bracketsConfig.forEach(el => brackOpen.push(el[0]));

  for (let i = 0; i < str.length; i++) {
    let curChar = str[i];
    if (brackOpen.includes(curChar) && !(brackP.get(curChar) === curChar && stack.includes(curChar) && stack[stack.length - 1] === curChar)) {
      stack.push(curChar);
    } else {
      if (stack.length === 0) return false;
      let uChar = stack[stack.length - 1];
      if (uChar === brackP.get(curChar)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0; // your solution
}
