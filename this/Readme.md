# Understanding the `this` Keyword in JavaScript

The `this` keyword in JavaScript can be confusing because its value depends on the context in which it is used. Here’s a breakdown of how `this` behaves in different scenarios:

## 1. Global Context
- In the global scope, `this` refers to the global object.
  - In browsers, it is the `window` object.
  - In Node.js, it is the `global` object.

## 2. Function Context
- Inside a **regular function** (non-strict mode), `this` refers to the global object (`window` in browsers).
- In **strict mode**, `this` is `undefined`.

## 3. Method Context
- When a function is called as a **method of an object**, `this` refers to the object the method is called on.

## 4. Arrow Functions
- Arrow functions **do not have their own `this`**. Instead, they inherit `this` from the enclosing lexical context.
So basically inheritence occurs in arrow function not in regular function

## 5. DOM Events
- In **event handlers**, `this` refers to the element that triggered the event.

## 6. Call, Apply, and Bind
- These methods (`call`, `apply`, `bind`) allow you to **explicitly set** the value of `this` when calling a function.