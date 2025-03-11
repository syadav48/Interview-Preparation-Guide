function maxSum(arr, k){
    let res = []
   for(let i = 0; i <= arr.length - k; i++){
        const sum = arr.slice(i, i + k).reduce((a, c) => a + c, 0)
        res.push(sum)
   }
   return Math.max(...res)
}
//above approach is brute force approach
//console.log(maxSum([2, 1, 5, 1, 3, 2], 3));
// time complexity for the above approach is O(n2)

function maxSubArrSum(arr, k){
    if(arr.length < k) return -1
    let maxSum = 0
    let windowSum = 0
    for(let i = 0; i < k; i++){
        windowSum += arr[i]  
    }
    maxSum = windowSum
    for(let i = k; i < arr.length; i++){
      windowSum = windowSum + arr[i] - arr[i-k]
      maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum
}
console.log(maxSubArrSum([2, 1, 5, 1, 3, 2], 3));

