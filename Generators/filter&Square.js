function* readNumbers(arr) {
    for (let num of arr) {
        yield num;
    }
}

function* filterEven(numbers) {
    for (let num of numbers) {
        if (num % 2 === 0) {
            yield num;
        }
    }
}

function* square(numbers) {
    for (let num of numbers) {
        yield num ** 2;
    }
}

// Usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pipeline = square(filterEven(readNumbers(numbers)));
for (let result of pipeline) {
    console.log(result);
}