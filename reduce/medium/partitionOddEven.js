const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//[[2, 4, 6, 8], [1, 3, 5, 7, 9]]

const res = numbers.reduce((a, c) => {
   if(c % 2 === 0){
    a[0].push(c)
   } else {
    a[1].push(c)
   }
   return a
}, [[], []])
console.log(res);
