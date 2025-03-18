var findKthLargest = function (nums, k) {
  let max = Math.max(...nums);
  const removingMax = (nums, max) => {
    let seen = new Set();
    let remove = new Set();
    remove.add(max);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      if (seen.has(nums[i]) && !remove.has(nums[i])) {
        remove.add(nums[i]);
      } else {
        result.push(nums[i]);
        seen.add(nums[i]);
      }
    }
    return result;
  };
};
//console.log(findKthLargest([3,2,1,5,6,4], 2));
//6,5,4,3,2,1
//console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
//6,5,5,4,3,3,2,2,1
//6,5,6,4
const removingMax = (nums, max) => {
  let seen = new Set();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) {
      seen.add(max);
      console.log(seen);
      
      if(seen.has(max)){
        result.push(nums[i])
      }
    } else{
      result.push(nums[i]);
    }
  }
  return result;
};
console.log(removingMax([6, 5, 5, 4, 3, 3, 2, 2, 1], 5));
