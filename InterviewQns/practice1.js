function practice1(num){
    let count = num;
    return function increment(){
        return count++
    }
}

const counter = practice1(5);
console.log(counter())
console.log(counter())
console.log(counter())
