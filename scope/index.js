function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable
    }

    return innerFunction;
}

const inner = outerFunction();
inner(); // Logs: I am outside!


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