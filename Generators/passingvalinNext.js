function* generatorWithInput() {
    const name = yield "What is your name?";
    const age = yield `Hello, ${name}! How old are you?`;
    yield `${name}, you are ${age} years old.`;
}

const gen = generatorWithInput();

console.log(gen.next().value); // "What is your name?"
console.log(gen.next("Alice").value); // "Hello, Alice! How old are you?"
console.log(gen.next(30).value); // "Alice, you are 30 years old."
console.log(gen.next().done); // true