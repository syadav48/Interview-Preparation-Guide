
Function.prototype.myCall = function (thisArg, ...argArray) {
      console.log(thisArg, argArray);
    if(argArray.length > 0){
        return thisArg.age * argArray[0]
    } else{
        return thisArg.age
    }
      
};


function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

console.log(multiplyAge.myCall(mary));// 21
console.log(multiplyAge.myCall(john, 2)); // 84



