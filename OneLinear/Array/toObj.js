const toObj = (arr) => Object.fromEntries(arr.map((a, i) => [i, a]))

console.log(toObj(["a", "b", "c"]));
//{0: "a", 1: "b", 2: "c"}

