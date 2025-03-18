function twoSumSorted(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        sum < target ? left++ : right--;
    }

    return -1; // No pair found
}

console.log(twoSumSorted([1, 2, 3, 4, 6], 6)); // Output: [1, 3] (2 + 4)
