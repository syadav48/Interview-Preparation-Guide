var findDuplicate = function(nums) {
   const arr = nums.reduce((a,c) => {
    if(a[c]){
        a[c]++
    } else{
        a[c] = 1
    }
    return a
   }, {})
   for(const key in arr){
    if(arr[key] > 1){
        return parseInt(key)
    }
   }
};
console.log(findDuplicate([1,3,4,2,2]));
