const uniqueBy = (arr, key) => [...new Map(arr.map((item) => [item[key], item]).values())]
function uniqueBy1(arr, key) {
   return [...new Map(arr.map((item) => [item[key], item])).values()]
}
//map stores only unique key !!! ensures only unique key!
console.log(uniqueBy([{id:1}, {id:2}, {id:1}, {id:3}, {id:1}], 'id'));
//[{id:1}, {id:2}]