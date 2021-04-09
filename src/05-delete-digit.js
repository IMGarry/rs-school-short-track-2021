/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const srt = n.toString();
  const min = `${[...srt].sort((a, b) => a - b).splice(0, 1)}`;
  return Number(srt.replace(min, ''));
}

module.exports = deleteDigit;
