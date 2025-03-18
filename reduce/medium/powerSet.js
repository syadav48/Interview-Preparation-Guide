const arr = [1,2,3]
const powerSet = (arr) => {
   return arr.reduce((a, b) => a.concat(a.map(r => [...r, b])),[[]])
}
console.log(powerSet(arr));
