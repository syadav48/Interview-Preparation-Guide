// Given an array of positive integers arr and a target sum target, find the length of the smallest subarray (contiguous elements)
//  whose sum is greater than or equal to target. If no such subarray exists, return 0.

function smallestSubArr(arr, target){
    let minLength = Infinity
    let windowSum = 0
    let left = 0
    for(let right = 0; right < arr.length; right++){
        windowSum += arr[right]
        while(windowSum >= target){
            console.log(right, left, windowSum, "wwiinnddooww");
            
            minLength = Math.min(minLength, right - left + 1)
            windowSum -= arr[left]
            left++
        }
    }

    return minLength === Infinity ? 0 : minLength
       
}
console.log(smallestSubArr([2, 1, 5, 2, 3, 2], 7));
