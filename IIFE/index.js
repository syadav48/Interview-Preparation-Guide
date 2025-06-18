//An Immediately Invoked Function Expression (IIFE) is a function that runs immediately after being defined. 
// It helps create a private scope, preventing variables from polluting the global namespace.
(function() {
    let message = "Hello from IIFE!";
    console.log(message);
})();
let result = (function() {
    let x = 10, y = 20;
    return x + y;
})();
console.log(result);
let counter = (function() {
    let count = 0;
    return {
        increment: function() { count++; },
        decrement: function() { count--; },
        getCount: function() { return count; }
    };
})();

counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2
console.log(counter.count); // Output: undefined (private variable)