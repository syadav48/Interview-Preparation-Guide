function generateMatrix(row, col){
    let res = []
    for(let i = 0; i < row; i++){
        let mat = []
        for(let j = 0; j < col; j++){
            mat.push(0)
        }
        res.push(mat)
    }
    return res
}

console.log(generateMatrix(3, 4));
