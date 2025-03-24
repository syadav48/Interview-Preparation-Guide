# Hash Tables in JavaScript

## Introduction to Hash Tables

A **hash table** (or **hash map**) is a data structure that stores key-value pairs. It uses a **hash function** to compute an index where values are stored in an array.

Hash tables provide efficient lookup, insertion, and deletion operations, typically in **O(1) time complexity** on average.

## Why Use a Weird Prime Number?

A **prime number** (like `31`, `53`, `101`) is often used in hash functions to reduce collisions. Using a prime number helps distribute values more evenly across the array, minimizing clustering and improving performance.

### Benefits of Using a Prime Number:
- **Reduces the number of collisions**
- **Provides a better distribution of keys**
- **Works well with multiplication-based hash functions**

## Collision Handling Techniques

Hash tables can encounter **collisions**, where multiple keys hash to the same index. There are two main methods to handle collisions:

### 1. **Separate Chaining**
This method stores multiple key-value pairs in a linked list at the same index.

```js
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let pair of this.keyMap[index]) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined;
  }
}
```

### 2. **Linear Probing**
This method finds the next available slot when a collision occurs.

```js
class LinearProbingHashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    while (this.keyMap[index] !== undefined) {
      index = (index + 1) % this.keyMap.length;
    }
    this.keyMap[index] = [key, value];
  }
  get(key) {
    let index = this._hash(key);
    while (this.keyMap[index] !== undefined) {
      if (this.keyMap[index][0] === key) return this.keyMap[index][1];
      index = (index + 1) % this.keyMap.length;
    }
    return undefined;
  }
}
```

## Examples: Colors Mapped to Hexadecimal Values

```js
const colorMap = new HashTable();
colorMap.set("red", "#FF0000");
colorMap.set("green", "#00FF00");
colorMap.set("blue", "#0000FF");
colorMap.set("yellow", "#FFFF00");
colorMap.set("customColor", "#A4F67D");
console.log(colorMap.get("customColor")); // Output: #A4F67D
```

## What Makes a Good Hash Function?
A good hash function should:
- **Be fast** (constant time `O(1)` complexity)
- **Distribute keys uniformly**
- **Minimize collisions**
- **Be deterministic** (always return the same output for the same input)

## Concept of Hashing

Hashing is the process of converting input (keys) into a fixed-size value (hash) using a hash function. It is widely used in data structures, cryptography, and caching.

## Solved Hash Table Problem in JavaScript

### Problem: Find the First Non-Repeating Character in a String

```js
function firstNonRepeatingChar(str) {
  let hashTable = new HashTable();
  
  for (let char of str) {
    hashTable.set(char, (hashTable.get(char) || 0) + 1);
  }
  
  for (let char of str) {
    if (hashTable.get(char) === 1) return char;
  }
  return null;
}

console.log(firstNonRepeatingChar("aabbccdeeff")); // Output: 'd'
```

## Conclusion
Hash tables are a fundamental data structure that allows efficient key-value storage and retrieval. By using good hashing techniques and collision resolution strategies like separate chaining and linear probing, we can optimize their performance for various applications.

