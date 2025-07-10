function upperTriangular(row, col) {
  let res = [];
  if (row !== col) {
    return false;
  }
  for (let i = 0; i < row; i++) {
    let mat = [];
    for (let j = 0; j < col; j++) {
      if (i > j) {
        mat.push(0);
      } else {
        const num = Math.ceil(Math.random(1, 10)*10)
        mat.push(num);
      }
    }
    res.push(mat);
  }
  return res;
}
console.log(upperTriangular(3, 3));
