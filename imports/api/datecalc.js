
const DAY = 3600 * 24 * 1000;
const WEEK = DAY * 7;
const MONTH = WEEK * 4;
const YEAR = DAY * 365;

const UNITS = {
  day: DAY,
  week: WEEK,
  month: MONTH,
  year: YEAR,
};

export const dateFromNow = (num, time) => {
  const msFromNow = num * UNITS[time];
  return Date.now() + msFromNow;
}
