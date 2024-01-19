// PROBLEM
// Write a function that 'rotates' an M x N matrix.
// Similar to transposing a matrix, the row and columnts should
// be swapped, but the order of the elements in the new row should 
// be reversed relative to a straight transposition.
//
// 1 5 8          3 4 1
// 4 7 2    ->    9 7 5
// 3 9 6          6 2 8
//
// Don't modify the original matrix.
//
// ALGORITHM
// create an empty (outer) array
// iterate over indices for first row of argument matrix
//   create new (inner) array (a 'row' in the matrix)
//   grab an element from each row with the same index
//   reverse the order of the elements
//   append that array to outer array
// return array
//
// CODE

function rotate90(matrix) {
  let transposedMatrix = [];
  matrix[0].forEach((_, colIdx) => {
    let newRow = [];
    matrix.forEach((_, rowIdx) => {
      newRow.push(matrix[rowIdx][colIdx])
    })
    transposedMatrix.push(newRow.reverse())
  })
  return transposedMatrix;
 }

// TESTS
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];
const newMatrix = rotate90(matrix);
console.log(String(newMatrix) === String([[3, 4, 1], [9, 7, 5], [6, 2, 8]]));
console.log(String(matrix) === String([[1, 5, 8], [4, 7, 2], [3, 9, 6]]));

const m2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const tm2 = rotate90(m2);
console.log(String(tm2) === String([[7, 4, 1], [8, 5, 2], [9, 6, 3]]));
console.log(String(m2) === String([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
