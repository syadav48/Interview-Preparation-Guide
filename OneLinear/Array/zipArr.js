function zipArr(arr1, arr2) {
    return arr1.map((e, i) => [e, arr2[i]])
}
console.log(zipArr([1,2,3], ['a','b','c']));
