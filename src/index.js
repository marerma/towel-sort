
// You should implement your task here.

module.exports = function towelSort (matrix) {
let matrixSorted = []
if (matrix) {
  for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    let index = i % 2
    index === 0? index = j : index = (matrix[i].length - 1 - j)
    matrixSorted.push(matrix[i][index])
    }  
  } return matrixSorted
}  else {
  return []
}
} 
