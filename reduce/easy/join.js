const strings = ['red', 'blue', 'green'];
const res = strings.reduce((a, c) => a.concat(c, ','), '')
console.log(res);
