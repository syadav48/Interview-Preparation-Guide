Let's summarize the concepts of **scope chain** and **lexical environment** in JavaScript based on the video you provided. I'll format it as a Markdown document.

---

# JavaScript Scope Chain and Lexical Environment

## Overview

In JavaScript, understanding the **scope chain** and **lexical environment** is crucial for grasping how variable accessibility works. These concepts are fundamental to how functions and blocks of code interact with each other.

## 1. Lexical Environment

- **Definition**:
  - A lexical environment is a structure that holds variable bindings (i.e., the association between variable names and their values) and a reference to its outer lexical environment.

- **Components**:
  - **Environment Record**: Contains the actual bindings of variables.
  - **Outer Lexical Environment Reference**: Points to the lexical environment of the outer scope.

- **Creation**:
  - A new lexical environment is created whenever a function is invoked or a block of code is executed.

### Example:
```javascript
function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable
    }

    return innerFunction;
}

const inner = outerFunction();
inner(); // Logs: I am outside!
```

In this example, `innerFunction` has access to `outerVariable` because it is defined within the same lexical environment.

## 2. Scope Chain

- **Definition**:
  - The scope chain is the mechanism that JavaScript uses to resolve variable names. It defines the order in which the JavaScript engine looks up variable bindings.

- **How It Works**:
  - When a variable is referenced, JavaScript first checks the current lexical environment. If the variable is not found, it looks up to the outer lexical environment, continuing this process until it reaches the global scope.

### Example:
```javascript
let globalVar = 'I am global!';

function firstFunction() {
    let firstVar = 'I am first!';

    function secondFunction() {
        let secondVar = 'I am second!';
        console.log(firstVar); // Accessing firstVar from the outer scope
        console.log(globalVar); // Accessing globalVar from the global scope
    }

    secondFunction();
}

firstFunction();
// Logs:
// I am first!
// I am global!
```

In this example, `secondFunction` can access `firstVar` from `firstFunction` and `globalVar` from the global scope due to the scope chain.

## Key Points

- **Lexical Environment**:
  - Holds variable bindings and a reference to the outer environment.
  - Created for each function invocation and block execution.

- **Scope Chain**:
  - Determines how variable names are resolved.
  - Looks up the current environment and continues to the outer environments until the variable is found or the global scope is reached.

## Conclusion

Understanding the scope chain and lexical environment is essential for mastering variable accessibility in JavaScript. These concepts help explain how closures work and how functions can access variables from their outer scopes.

---

This Markdown document summarizes the key points about scope chains and lexical environments in JavaScript. You can use it as a reference for understanding how variable accessibility and function scopes operate in the language.