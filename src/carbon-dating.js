const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  if (
    typeof sampleActivity !== "string" ||
    isNaN(Number(sampleActivity)) ||
    Number(sampleActivity) <= 0 ||
    Number(sampleActivity) > MODERN_ACTIVITY
  ) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let sampleAge;
  sampleAge =
    Math.log(MODERN_ACTIVITY / Number(sampleActivity)) /
    Math.log(Math.exp(1)) /
    k;
  return Math.ceil(sampleAge);
}

module.exports = {
  dateSample,
};
