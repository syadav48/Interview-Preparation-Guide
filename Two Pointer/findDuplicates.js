var findDuplicate = function(nums) {
    let arr = []
    for(let i = 0; i < nums.length; i++){        
        if(arr.includes(nums[i])){
            return nums[i]
        } else{
            arr.push(nums[i])
        }
    }
};
console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([3,3,3,3,3]));
