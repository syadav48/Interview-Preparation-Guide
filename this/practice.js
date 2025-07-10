function showThis(){
    'use strict'
    console.log(this)
}
showThis()

const obj = {
    name:'Alice',
    greet: function(){
        console.log(`Heloo ${this.name}`)
    }
}
console.log(obj.greet());

const  obj1 = {
    name:'Bob',
    greet: () => `Hello ${this?.name}`
}
console.log(obj1.greet());

const  obj2 = {
    name:'Bob',
   greet(){
    console.log(this.name)
   }
}
console.log(obj2.greet());

const user = {
  name: "Bob",
  greet() {
    console.log(this.name);
  }
};

const greetFn = user.greet;
greetFn();

const obj4 = {
  name: "Charlie",
  greet: () => {
    console.log(this.name);
  }
};
obj4.greet();

const person = {
  name: "Dana",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};
person.greet();



// this inside settimeout
const user3 = {
  name: "Eve",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};
user3.greet(); //?

//
const user4 = {
  name: "Frank",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};
user4.greet();

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

const p = new Person("Grace");
p.sayHi();

//binding this
function sayHi2(){
    console.log(this.name);
    
}
const obj6 = {name: 'Pradeep'}
const sayHi3 = sayHi2.bind(obj6)
console.log(sayHi3());




// Illogical : Pay attention here: 





