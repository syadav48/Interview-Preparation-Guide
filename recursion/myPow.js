var myPow = function(x, n) { 
   if(n === 0){
     return 1
   } else if(n < 0){

   } else{
        const num = n === 1 ? x : x * myPow(x, n - 1)
        return num
   }
};
console.log(myPow(2.00000, 10));
console.log(myPow(2.00000, -2));
console.log(myPow(2.10000, 3));
