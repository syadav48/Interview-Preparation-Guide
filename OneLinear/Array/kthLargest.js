//kth largest element effeciently
const kthLargest = (arr, k) => arr.sort((a, b) => b - a)[k - 1]
console.log( kthLargest([3, 1, 5, 6, 2], 2));


