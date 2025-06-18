//Avoiding global scope pollution

(function() {
    let localVar = "I'm private!";
    console.log(localVar);
})();
console.log(typeof localVar); // Output: undefined (not accessible globally)

//Execution Timing: 
//- IIFE: Runs immediately after being defined.
//- Regular Function: Runs only when explicitly called.

(function() {
    console.log("IIFE executed!");
})(); // Runs immediately

function regularFunction() {
    console.log("Regular function executed!");
}
regularFunction(); // Runs only when called

//Both can accept parameters, but IIFEs do so immediately.
(function(name) {
    console.log("Hello, " + name);
})("Suryoday"); // IIFE with parameter

function greet(name) {
    console.log("Hello, " + name);
}
greet("Suryoday"); // Regular function with parameter

//- Use IIFEs when you need immediate execution and private scope.
//- Use regular functions when you need reusability and explicit control over execution.

const foo = void (function bar() {
  return 'foo';
})();

console.log(foo); // undefined

