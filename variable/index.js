console.log(x); // Logs: undefined
var x = 5;
console.log(x); // Logs: 5
{
    let y = 10;
    console.log(y); // Logs: 10
}
console.log(y); // ReferenceError: y is not defined
const z = 15;
console.log(z); // Logs: 15
z = 20; // TypeError: Assignment to constant variable.
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;