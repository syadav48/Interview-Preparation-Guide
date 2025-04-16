# Understanding Closures in JavaScript

A **closure** is a powerful feature in JavaScript that allows a function to access variables from its outer (enclosing) scope even after that scope has finished executing. This is a fundamental concept that enables many advanced programming techniques.

## Key Points About Closures

### 1. Function Scope
In JavaScript, functions create their own scope. Variables defined inside a function are not accessible from outside that function.


### 2. Accessing Outer Variables    
A closure allows an inner function to access variables from its outer function even after the outer function has returned.

### 3. Persistent State   
Closures can maintain a persistent state. The inner function remembers the environment in which it was created.

### 4. Data Encapsulation   
Data encapsulation is the concept of bundling data with the methods that operate on that data, and restricting direct access to some of an object's components.

## Key Takeway: 
Closures allow inner functions to access outer function variables even after the outer function has executed.
They are useful for creating private variables and maintaining state.
Understanding closures is essential for mastering JavaScript, as they are widely used in various programming patterns.

