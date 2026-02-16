function removeDuplicates(nums){
    const set = new Set();
    for(let i = 0; i < nums.length; i++){
        if(!set.has(nums[i])){
            set.add(nums[i])
        }
    }
    return set.values()
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
