var frequencySort = function(s) {
    const mergeStr = (arr) => {
        let str = ''
        for(let i = 0; i < arr[1]; i++){
            str += arr[0]
        }
        return str
    }
    const arr = s.split('').reduce((a, c) => {
        if(a[c]){
            a[c]++
        } else{
            a[c] = 1
        }
        return a
    }, {})
    const map = Object.entries(arr).sort((a, b) => b[1] - a[1]).map(e => mergeStr(e)).join('')
    return map
};
console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
