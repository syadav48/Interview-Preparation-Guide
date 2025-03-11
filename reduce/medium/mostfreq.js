const elements = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const res = elements.reduce((acc, curr) => {
    acc.freq[curr] = (acc.freq[curr] || 0) + 1
    if(acc.freq[curr] > acc.maxCount){
        acc.maxCount = acc.freq[curr]
        acc.mostFreq = curr
    }
    return acc
}, {freq: {}, maxCount: 0, mostFreq: null})
console.log(res);
