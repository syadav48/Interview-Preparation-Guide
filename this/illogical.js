const user7 = {
  name: "Bob",
  greet() {
    console.log(this.name);
  }
};

const greetFn3 = user7.greet;
greetFn3();
// Now you're doing something different:
// You're assigning the method to a variable.
// You're not calling it through the user object anymore.
// So, greetFn() becomes a plain function call.


const user = {
  name: "Eve",
  greet() {
    setTimeout(function () {
      console.log(this.name); // ❌ undefined
    }, 1000);
  }
};

user.greet();
// You’re inside an object method (greet), so at first glance this seems to refer to user. ✅
// But then, inside setTimeout(function() { ... }), you're calling a regular function (not an arrow function), so this inside that function does not inherit from the outer context.
//So basically inheritence occurs in arrow function not in regular function 

const use = {
  name: "Frank",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};
use.greet();
