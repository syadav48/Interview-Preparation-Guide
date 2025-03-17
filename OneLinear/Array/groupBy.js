function groupBy(arr, key){
    return arr.reduce((acc, curr) => {
      if(acc[curr[key]]){
         acc[curr[key]].push(curr)
      } else{
         acc[curr[key]] = []
         acc[curr[key]].push(curr)
      }
      return acc
    }, {})
}
const groupBy = (arr, key) => arr.reduce((acc, obj) => ((acc[obj[key]] = acc[obj[key]] || []).push(obj), acc), {});
// group an array of objects by a key
//console.log(groupBy([{age: 30}, {age: 40}, {age: 30}, {age: 50}, {age: 30}], 'age'));
//{ "30": [{age: 30}, {age: 30}], "40": [{age: 40}] }