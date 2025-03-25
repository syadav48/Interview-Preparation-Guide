
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        console.log(slow, fast, "sloefast");
        
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    let slow2 = nums[0];

    while (slow !== slow2) {
        console.log(slow, slow2, "slow22");
        
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;    
};
console.log(findDuplicate([1,3,4,2,2]));
