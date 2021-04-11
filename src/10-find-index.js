/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (value === array[mid]) {
      return mid;
    }
    if (value < array[mid]) {
      end = mid - 1;
    } else if (value > array[mid]) {
      start = mid + 1;
    }
  }
  return false;
}

module.exports = findIndex;
