var threeSum = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  let res = [];
  let left = 0;
  let right = arr.length - 1;
  let mid = left + 1;
  while (left < right) {
    if (arr[left] + arr[mid] + arr[right] > 0) {
      right--;
    } else if (arr[left] + arr[mid] + arr[right] < 0) {
      left++;
    } else {
      res.push([arr[left], arr[mid], arr[right]]);
      left++;
      right--;
    }
  }
  return res;
};

//[-4,-1,-1,0,1,2]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]))
console.log(threeSum([0,0, 0]))
//-4+2+0
//
