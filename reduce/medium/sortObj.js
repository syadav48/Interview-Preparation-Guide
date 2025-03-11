const data = [
    { id: 1, group: 'A' },
    { id: 2, group: 'B' },
    { id: 3, group: 'A' },
    { id: 4, group: 'B' },
];
//   {
//     A: [{ id: 1, group: 'A' }, { id: 3, group: 'A' }],
//     B: [{ id: 2, group: 'B' }, { id: 4, group: 'B' }]
//   }

const res = data.reduce((a, c) => {
    let arr = []
    if (a[c.group]) {
        a[c.group].push(c)
    } else {
        arr.push(c)
        a[c.group] = arr
    }
    return a
}, {})
console.log(res);
