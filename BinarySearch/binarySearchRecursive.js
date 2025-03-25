function binarySearchRecursive(sortedArray, target, left = 0, right = sortedArray.length - 1) {
    if (left > right) return -1; // Base case: target not found

    const mid = Math.floor((left + right) / 2);
    const midValue = sortedArray[mid];

    if (midValue === target) {
        return mid;
    } else if (midValue < target) {
        return binarySearchRecursive(sortedArray, target, mid + 1, right);
    } else {
        return binarySearchRecursive(sortedArray, target, left, mid - 1);
    }
}

// Example usage
const recursiveResult = binarySearchRecursive(sortedNumbers, 13);
console.log(`Recursive search found at index ${recursiveResult}`); // Output: Recursive search found at index 6