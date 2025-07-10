// Global context
console.log(this); // In a browser, this will log the window object

function showThis() {
    console.log(this);
}

showThis(); // In non-strict mode, logs the window object

// Strict mode
function showThisStrict() {
    'use strict';
    console.log(this);
}

showThisStrict(); // Logs undefined

// Method context
const obj = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

obj.greet(); // Logs: Hello, my name is Alice

// Arrow function
const obj2 = {
    name: 'Bob',
    greet: function() {
        const inner = () => {
            console.log(`Hello, my name is ${this.name}`);
        };
        inner();
    }
};

obj2.greet(); // Logs: Hello, my name is Bob

// DOM event
const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = function() {
    console.log(this); // Logs the button element
};
document.body.appendChild(button);


// Detached Method: 

