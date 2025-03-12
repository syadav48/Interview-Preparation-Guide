function circularIteration(arr){
    let result = []
    for(let i=0; i<arr.length; i++){
        result.push([...arr.slice(i), ...arr.slice(0, i)])
    }
    return result
}


console.log(circularIteration([1,2,3,4,5,6]));
// the time complexity is O(n^2), and the space complexity is O(n^2 + n) for the provided method.
//The dominant factor in the time complexity is the loop that iterates over each element of the input array. For each iteration, the slicing operation arr.slice(i) and arr.slice(0, i) takes linear time. Therefore, the overall time complexity is O(n^2)
//The space complexity is influenced by the additional space used to store the rotated arrays in the result array. For each iteration, a new array is created using the spread operator .... The space complexity is O(n^2) due to the n iterations, and for each iteration, a new array of size n is created. Additionally, the space complexity is impacted by the input array itself, making the overall space complexity O(n^2 + n).


function print(a, n, ind) {
    for (var i = 0; i < n; i++) {
      console.log(a[(ind + i) % n]);
    }
  }
   
  var a = ['A', 'B', 'C', 'D', 'E', 'F'];
  var n = 6;
  print(a, n, 3);
