/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsTransformed = domains.map((it) => {
    const array = it
      .split('.')
      .reverse()
      .map((el) => '.'.concat(el));

    const result = [];
    let tmp = array[0];
    for (let i = 0; i < array.length; i++) {
      result.push(tmp);
      tmp += array[i + 1];
    }
    return result;
  });

  return domainsTransformed.flat().reduce((acc, rec) => {
    acc[rec] = (acc[rec] || 0) + 1;
    return acc;
  }, {});
}

module.exports = getDNSStats;
