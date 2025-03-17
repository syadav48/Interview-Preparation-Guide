const permute = arr => arr.length <= 1 ? [arr] : arr.flatMap((v, i) => permute([...arr.slice(0, i), ...arr.slice(i+1)]).map(p => [v, ...p]));

console.log(permute([1,2]));
//[[1,2,3], [1,3,2], [2,1,3], ...]
//[1,2,3], [1,3,2], [3,2,1] [2,1,3]