/*
 *  1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and  column are set to O.
 */

const _matrix = [
  [1, 2, 3, 0, 5],
  [1, 2, 3, 4, 5],
  [1, 0, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];

const fillColumnWithZeros = (column, matrix) => {
  
  for (let x = 0; x < matrix.length; x++) {
    matrix[x][column] = 0;
  }
};

const columnsWithZeros = (positions, matrix) => {
  for (let x of positions.columns) {
    x
    fillColumnWithZeros(x, matrix);
  }
};

const fillRowsWithZeros = (row, matrix) => {
  for (let x = 0; x < matrix[row].length; x++) {
    matrix[row][x] = 0;
  }
};
const rowsWithZeros = (positions, matrix) => {
  for (let x of positions.rows) {
    fillRowsWithZeros(x, matrix);
  }
};

const zeroMatrix = (matrix) => {
  const positions = {
    rows: [],
    columns: [],
  };

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === 0) {
        positions.rows.push(x);
        positions.columns.push(y);
      }
    }
  }
  positions
  columnsWithZeros(positions, matrix);
  rowsWithZeros(positions, matrix);
};
zeroMatrix(_matrix);
_matrix;
