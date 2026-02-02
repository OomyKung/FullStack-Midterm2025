// Made by : Me
function transposeMatrix(matrix){
    if (matrix.length <= 1) return "Matrix length is too low!"
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];
    for (let j = 0;j<cols;j++){
        transposed[j] = [];
        for (let i = 0;i<rows;i++){
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
}
const matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(transposeMatrix(matrix1))
const matrix2 = [
    [1,2],
    [3,4]
]
console.log(transposeMatrix(matrix2))