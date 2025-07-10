export function determinant2D(mat) {
  if (mat.every((e) => e.length !== mat.length)) {
    return false;
  }
  let a = 1,
    b = 1;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (i === j) {
        a *= mat[i][j];
      } else {
        b *= mat[i][j];
      }
    }
  }
  return Math.abs(a - b);
}
console.log(
  determinant2D([
    [2, 3],
    [4, 5],
  ])
);
