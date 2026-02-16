const flattenArr = (arr) => {
    return arr.reduce((acc, curr) => {
        if(Array.isArray(curr)){
           return acc.concat(flattenArr(curr))
        } else{
           return acc.concat(curr)
        }
    }, [])
}
console.log(flattenArr([1, 2, [3, 4, [5,6,[7,7]]], 5]))