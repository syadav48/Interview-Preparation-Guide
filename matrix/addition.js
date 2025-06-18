function addition (mat1, mat2){
    
    let mat = []
    for(let i = 0; i < mat1.length; i++){
        let local = []
        for(let j = 0; j < mat1[i].length; j++){
            const sum = mat1[i][j] + mat2[i][j]
            local.push(sum)
        }
        mat.push(local)
    }
    return mat

}

console.log(addition([[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]))

function addition1(mat1, mat2){
    let mat = []
    for(let i = 0; i < mat1.length; i++){
        mat[i] = []
        for(let j = 0; j < mat1[i].length; j++){
            mat[i][j] =  mat1[i][j] + mat2[i][j]
        }
    }
    return mat
}
console.log(addition1([[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]))


