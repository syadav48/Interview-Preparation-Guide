var groupAnagrams = function (strs) {
 let map = new Map()
  for (let str of strs) {
    // Sort the string to get the anagram key
    let key = str.split("").sort().join("");
    
    
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
    console.log({key, map});
  }
  // Convert map values to array of arrays (or keep as map if you want)
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// 0 - eat, tea, ate
// 1 - tan, nat
// 2 - bat

//{0: [eat, tea, ate], 1: [tan, nat], 2: [bat]}

console.log("hvjkj".split('').sort().join(""));

