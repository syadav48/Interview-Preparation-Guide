var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while(left < right){
        if((numbers[left] + numbers[right]) > target){
            right--
        } else if((numbers[left] + numbers[right]) < target){
            left++
        } else{
            return [left, right].map((e) => e + 1)
        }
    }
    return -1
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 3, 12], 15));
console.log(twoSum([-1, 0], -1));
