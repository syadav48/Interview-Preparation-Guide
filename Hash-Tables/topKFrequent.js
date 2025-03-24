var topKFrequent = function(nums, k) {
    const arr = nums.reduce((a, c) => {
        if(a[c]){
            a[c]++
        } else{
            a[c] = 1
        }
        return a
    }, {})
    const map = Object.entries(arr).sort((a, b) => b[1] - a[1]).slice(0, k).map(e => Number(e[0]))
    return map
};
console.log(topKFrequent([1,1,1,2,2,3], 2));
