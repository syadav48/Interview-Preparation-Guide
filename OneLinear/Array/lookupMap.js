const toMap = (arr, id) => {
    return new Map(arr.map((ele) => [ele[id], ele]))
}
console.log(toMap([{id:1, name:'A'}, {id:2, name:'B'}], 'id'));
//{ 1 => {id:1, name:'A'}, 2 => {id:2, name:'B'} }