// PROBLEM
// Write a function that can take a an array of arrays,
// representing a matrix, and transpose it. The transposition
// should result from exchanging the rows and columns. Example:
//
// 1 5 8          1 4 3
// 4 7 2    ->    5 7 9
// 3 9 6          8 2 6
//
// Don't modify the original matrix.
//
// EXAMPLES
// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];
//
// const newMatrix = transpose(matrix);
// console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);    // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
//
// DATA STRUCTURES
// Array of arrays
//
// ALGORITHM
// create an empty array
// iterate over indices for first row of argument matrix
//   create new array to outer array
//   append elements from each row with that index
//   append that array to outer array
// return array
//
// CODE

function transpose(matrix) {
  let transposedMatrix = [];
  matrix[0].forEach((_, colIdx) => {
    let newRow = [];
    matrix.forEach((_, rowIdx) => {
      newRow.push(matrix[rowIdx][colIdx])
    })
    transposedMatrix.push(newRow)
  })
  return transposedMatrix;
 }

// TESTS
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];
const newMatrix = transpose(matrix);
console.log(String(newMatrix) === String([[1, 4, 3], [5, 7, 9], [8, 2, 6]]));
console.log(String(matrix) === String([[1, 5, 8], [4, 7, 2], [3, 9, 6]]));

const m2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const tm2 = transpose(m2);
console.log(String(tm2) === String([[1, 4, 7], [2, 5, 8], [3, 6, 9]]));
console.log(String(m2) === String([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
