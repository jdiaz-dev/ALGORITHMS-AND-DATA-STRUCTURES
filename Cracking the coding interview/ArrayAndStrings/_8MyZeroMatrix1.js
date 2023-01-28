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

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      let rowToModify = positions.rows.find((elem) => elem === x);
      let columnToModify = positions.columns.find((column) => column === y);

      if (!isNaN(rowToModify)) {
        matrix[x][y] = 0;
        matrix;
      }

      if (isNaN(columnToModify)) {
        matrix[x][y] = 0;
      }
    }
  }
};
zeroMatrix(_matrix);
_matrix;
/* const arr = [1, 2, 3, 4, 5, 6, 6];
const resr = arr.filter((num) => num === 5);
const he = arr[9]
he
 */
