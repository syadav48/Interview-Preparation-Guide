function missingNo(arr){
    return Array.from({length: Math.max(...arr)}, (_, i) => i + 1).filter(n => !arr.includes(n))
}
console.log(missingNo([1,2,4,6]));

