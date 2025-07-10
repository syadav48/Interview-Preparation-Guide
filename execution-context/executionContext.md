**Execution Context in JavaScript**

Execution context is a fundamental concept in JavaScript that defines the environment in which JavaScript code is executed. It determines how variables, functions, and objects are accessed and managed during the execution of code. Understanding execution context is crucial for grasping how JavaScript works, especially in relation to scope, closures, and the execution stack.

### Key Components of Execution Context

1. **Variable Environment**:
   - This is a structure that holds the variables and function declarations defined within the context. It includes:
     - **Lexical Environment**: A record of the variables and their values.
     - **Reference to the Outer Lexical Environment**: This allows access to variables from outer contexts (closures).

2. **Scope**:
   - The scope defines the accessibility of variables and functions at different parts of the code. There are two main types of scope:
     - **Global Scope**: Variables defined outside any function are accessible throughout the entire code.
     - **Function Scope**: Variables defined within a function are only accessible within that function.

3. **`this` Binding**:
   - The `this` keyword refers to the context in which a function is executed. Its value can change depending on how a function is called (e.g., as a method of an object, as a standalone function, etc.).

4. **Code Execution**:
   - The actual code that is executed within the context. This includes function calls, variable assignments, and other operations.

### Types of Execution Contexts

1. **Global Execution Context**:
   - This is the default context in which JavaScript code runs. It is created when the JavaScript engine starts executing the code.
   - In the global context, the `this` keyword refers to the global object (e.g., `window` in browsers).

2. **Function Execution Context**:
   - Each time a function is invoked, a new execution context is created for that function.
   - This context contains its own variable environment, scope chain, and `this` binding.
   - When a function is called, the JavaScript engine creates a new execution context and pushes it onto the execution stack.

3. **Eval Execution Context**:
   - Code executed inside an `eval()` function creates its own execution context. However, the use of `eval()` is generally discouraged due to security and performance concerns.

### Execution Stack

- The execution stack (or call stack) is a stack data structure that keeps track of the execution contexts. When a function is called, its execution context is pushed onto the stack. When the function completes, its context is popped off the stack.
- The stack follows a Last In, First Out (LIFO) order, meaning the most recently called function is the first to complete and be removed from the stack.

### Example of Execution Context

```javascript
let globalVar = "I am global";

function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        let innerVar = "I am from inner function";
        console.log(globalVar); // Access global variable
        console.log(outerVar); // Access outer variable
        console.log(innerVar); // Access inner variable
    }

    innerFunction();
}

outerFunction();
```

**Explanation**:
- When `outerFunction` is called, a new execution context is created for it, which includes `outerVar`.
- Inside `outerFunction`, when `innerFunction` is called, another execution context is created for it, which includes `innerVar`.
- The `innerFunction` can access variables from its own context, its parent context (`outerFunction`), and the global context.

### Conclusion

Execution context is a core concept in JavaScript that governs how code is executed and how variables and functions are accessed. Understanding execution contexts, their components, and the execution stack is essential for mastering JavaScript, especially when dealing with closures, asynchronous programming, and scope management.