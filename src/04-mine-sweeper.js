/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function getBomb(row, col) {
    if (row < 0 || col < 0) return 0;
    if (row >= matrix.length) return 0;
    if (col >= matrix[row].length) return 0;
    if (matrix[row][col] === true) return 1;
    return 0;
  }
  const result = [];
  for (let row = 0; row < matrix.length; row++) {
    let line = '';
    for (let col = 0; col < matrix[row].length; col++) {
      if (getBomb(row, col) === 1) {
        line += 1;
      } else {
        let bombs = 0;
        bombs += getBomb(row - 1, col - 1);
        bombs += getBomb(row - 1, col);
        bombs += getBomb(row - 1, col + 1);

        bombs += getBomb(row, col - 1);
        bombs += getBomb(row, col + 1);

        bombs += getBomb(row + 1, col - 1);
        bombs += getBomb(row + 1, col);
        bombs += getBomb(row + 1, col + 1);

        line += bombs;
      }
    }
    result.push([...line]);
  }
  return result;
}

module.exports = minesweeper;
