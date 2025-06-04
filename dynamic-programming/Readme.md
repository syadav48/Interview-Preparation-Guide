# Dynamic Programming Concepts

Dynamic Programming (DP) is an optimization technique that solves problems by breaking them down into smaller subproblems and storing the results of these subproblems to avoid redundant computations.

## Key Concepts

### 1. Memoization (Top-Down Approach)
- Stores the results of expensive function calls and returns the cached result when the same inputs occur again
- Implemented using recursion and a memo object/dictionary
- Example: Fibonacci sequence with memoization

### 2. Tabulation (Bottom-Up Approach)
- Builds a table (usually an array) iteratively to store solutions to subproblems
- Typically implemented using iteration
- Often more space-efficient than memoization
- Example: Fibonacci sequence with tabulation

### Common DP Patterns

1. **Fibonacci Sequence**
   - Demonstrates basic memoization and tabulation
   - Time complexity improves from O(2^n) to O(n)

2. **Grid Traveler**
   - Counts number of ways to traverse a grid from top-left to bottom-right
   - Demonstrates 2D DP problems

3. **CanSum Problem**
   - Determines if a target sum can be achieved using numbers from an array (with repetition)
   - Returns boolean result

4. **HowSum Problem**
   - Returns an array containing any combination of elements that add up to the target
   - Extension of CanSum that tracks the actual elements

5. **BestSum Problem**
   - Returns the shortest combination of numbers that add up to the target
   - Extension of HowSum that optimizes for combination length

## Time Complexities

| Problem        | Brute Force | Memoization | Tabulation |
|----------------|-------------|-------------|------------|
| Fibonacci      | O(2^n)      | O(n)        | O(n)       |
| Grid Traveler  | O(2^(n+m))  | O(n*m)      | O(n*m)     |
| CanSum         | O(n^m)      | O(n*m)      | O(n*m)     |
| HowSum         | O(n^m)      | O(n*m)      | O(n*m)     |
| BestSum        | O(n^m)      | O(n*m)      | O(n*m)     |

## When to Use DP

1. The problem can be broken down into overlapping subproblems
2. The problem has an optimal substructure (optimal solution can be constructed from optimal solutions of subproblems)
3. The problem requires optimization (shortest path, maximum sum, etc.)

## Implementation Tips

1. Start with a brute force recursive solution
2. Identify the overlapping subproblems
3. Add memoization to cache results
4. Consider converting to tabulation for potential space optimization
5. Draw out the problem space to visualize dependencies