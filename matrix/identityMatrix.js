function identityMatrix(row, col) {
  if (row !== col) {
    return false;
  }
  let res = [];
  for (let i = 0; i < row; i++) {
    let mat = [];
    for (let j = 0; j < col; j++) {
      if (i === j) {
        mat.push(1);
      } else {
        mat.push(0);
      }
    }
    res.push(mat);
  }
  return res;
}

console.log(identityMatrix(4, 4));
