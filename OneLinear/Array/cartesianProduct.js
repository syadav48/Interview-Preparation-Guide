function cartesian(...arr){
    return arr.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
}
console.log(cartesian([1,2], ['a','b'], [1, 'v', 'z']));
//[[1,'a'], [1,'b'], [2,'a'], [2,'b']]
