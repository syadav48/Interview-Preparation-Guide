# The Sliding Window Algorithm#
is a technique used to solve problems involving arrays or strings by maintaining a "window" (a subarray or substring) and sliding it over the data to find a solution. It is efficient because it avoids redundant calculations and reduces the time complexity to O(n).


## Fixed-Size Sliding Window:

The window size is fixed (k).

We calculate the sum of the first window and then slide the window by adding the next element and removing the first element of the previous window.

## Variable-Size Sliding Window:

We have to findout the max and min window width that satisfy the condition.

The window size changes dynamically.

We expand the window by moving the end pointer and shrink it by moving the start pointer when a duplicate is found.