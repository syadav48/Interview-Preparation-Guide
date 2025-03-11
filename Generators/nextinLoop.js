function* fruitGenerator() {
    yield "Apple";
    yield "Banana";
    yield "Cherry";
}

const gen = fruitGenerator();
let result = gen.next();

while (!result.done) {
    console.log(result.value); // Logs the current value
    result = gen.next(); // Move to the next yield
}