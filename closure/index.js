function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable
    }

    return innerFunction; // Returning the inner function
}

const closureFunction = outerFunction(); // outerFunction is executed
closureFunction(); // Logs: I am from outer function

//Closures are often used in scenarios like event handlers or when creating functions that need to maintain state:

function makeCounter() {
    let count = 0; // Private variable

    return function() {
        count += 1; // Increment count
        return count; // Return the current count
    };
}

const counter = makeCounter();
console.log(counter()); // Logs: 1
console.log(counter()); // Logs: 2
console.log(counter()); // Logs: 3