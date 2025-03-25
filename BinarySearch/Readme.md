# Binary Search
### Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

## How Binary Search Works: 
1. Compare the target value to the middle element of the array.
2. If the target value is equal to the middle element, we've found our target.
3. If the target value is less than the middle element, search the left half.
4. If the target value is greater than the middle element, search the right half.
5. Repeat until the target is found or the search space is exhausted.

## Time Complexity: 
Best Case: O(1)
Avg/Worst Case: O(logn)