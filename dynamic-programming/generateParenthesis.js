function generateParenthesis(n) {
  let result = [];

  function backTrack(current, open, close) {
    if (current.length === n * 2) {
      result.push(current);
    }
    console.log({ current, open, close, n });

    if (open < n) {
      backTrack(current + "(", open + 1, close);
    }
    if (open > close) {
      backTrack(current + ")", open, close + 1);
    }
  }
  backTrack("", 0, 0);
  return result;
}
console.log(generateParenthesis(3));



// ├── Add "(": backtrack("(", 1, 0)
// │   ├── Add "(": backtrack("((", 2, 0)
// │   │   └── Add ")": backtrack("(()", 2, 1)
// │   │       └── Add ")": backtrack("(())", 2, 2) ✅ push to result
// │   └── Add ")": backtrack("()", 1, 1)
// │       └── Add "(": backtrack("()(", 2, 1)
// │           └── Add ")": backtrack("()()", 2, 2) ✅ push to result
// └── Can’t add ")" first because close = 0 < open = 0 ❌ invalid

