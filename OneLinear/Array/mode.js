const mode = (arr) => {
    const res = arr.reduce((acc, curr) => {
        if(acc[curr]){
            acc[curr]++
        } else{
            acc[curr] = 1
        } 
        return acc
    }, {})
    
    return Object.entries(res).reduce((a, b) => a[1] > b[1] ? a : b)[0]
}
console.log(mode([1, 2, 2, 2, 2, 3, 3, 3, 2, 2]));
