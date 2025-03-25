function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = sortedArray[mid];

        if (midValue === target) {
            return mid; // Target found, return index
        } else if (midValue < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }

    return -1; // Target not found
}

// Example usage
const sortedNumbers = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;

const result = binarySearch(sortedNumbers, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`); // Output: Element found at index 4
} else {
    console.log("Element not found in the array");
}