"use strict";
//challenge 1
//Functions
const calcAverage = (score1, score2, score3) => {
  const averagescore = (score1 + score2 + score3) / 3;
  return averagescore;
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins}vs${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas}vs${avgDolphins})`;
  } else {
    return `No team wins...`;
  }
};
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

const scoreDolphins2 = calcAverage(85, 54, 49);
const scoreKoalas2 = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins2, scoreKoalas2));

// challenge 2a
//arrays
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1990, 1991, 1999];
console.log(calcAge(year[1]));
console.log(calcAge(year[year.length - 1]));
const ages = [calcAge(year[1]), calcAge(year[year.length - 1])];
console.log(ages);
// challenge 2b
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
