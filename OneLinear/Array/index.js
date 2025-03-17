//kth largest element effeciently
const kthLargest = (arr, k) => arr.sort((a, b) => b - a)[k - 1]
console.log( kthLargest([3, 1, 5, 6, 2], 2));

//remove duplicates from array of objects

const uniqueBy = (arr, key) => [...new Map(arr.map((item) => [item[key], item]).values())]
function uniqueBy1(arr, key) {
   return [...new Map(arr.map((item) => [item[key], item])).values()]
}
//map stores only unique key !!! ensures only unique key!
console.log(uniqueBy([{id:1}, {id:2}, {id:1}, {id:3}, {id:1}], 'id'));


function groupBy(arr, key){
    
}
// group an array of objects by a key
console.log(groupBy([{age: 30}, {age: 40}, {age: 30}], 'age'));
//groupBy([{age: 30}, {age: 40}, {age: 30}], 'age')

