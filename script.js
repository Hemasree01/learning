"use strict";
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
console.log(checkWinner(scoreDolphins, scoreKoalas));

const scoreDolphins2 = calcAverage(85, 54, 49);
const scoreKoalas2 = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins2, scoreKoalas2));
