const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 8];
const res = arr.reduce((a, c) => {
    if(a[c]){
        a[c]++
    } else{
        a[c] = 1
    }
    return a
}, {})
const result = arr.reduce(((a, c) => (a[c] ? a[c]++ : a[c] = 1, a)), {})
console.log(result);
