const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  throw new NotImplementedError("Not implemented");
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (isNaN(date) || !(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  let season;
  const monthInfo = [
    { name: "winter", code: "11, 0, 1" },
    { name: "spring", code: "2, 3, 4" },
    { name: "summer", code: "5, 6, 7" },
    { name: "autumn", code: "8, 9, 10" },
  ];
  const month = date.getMonth();

  for (let i = 0; i < monthInfo.length; i++) {
    if (monthInfo[i].code.includes(month)) {
      season = monthInfo[i].name;
      break;
    }
  }
  return season;
}

module.exports = {
  getSeason,
};
