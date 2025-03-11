function longestSubArr(arr, target){
    let maxLength = -Infinity
    let windowSum = 0
    let left = 0
    for(let right = 0; right < arr.length; right++){
        windowSum += arr[right]
        console.log(windowSum, "www");
        
        while(windowSum >= target){
            console.log(right, left, windowSum, "wwiinnddooww");
            
            maxLength = Math.max(maxLength, right - left + 1)
            windowSum -= arr[left]
            left++
        }
    }

    return maxLength === -Infinity ? 0 : maxLength
       
}
console.log(longestSubArr([3, 2, 4, 5, 1, 1, 1, 1, 1, 2, 3, 3], 5));