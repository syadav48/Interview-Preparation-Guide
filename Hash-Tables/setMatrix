var setZeroes = function(matrix) {
    let a = new Map()
    let b = new Map()
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                a.set(i, 0)
                b.set(j, 0)
            }
        }
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if((a.get(i) === 0) || b.get(j) === 0){
                matrix[i][j] = 0
            }
        }
    }
    return matrix
    
};
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));    
