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
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// console.log(calcTip(100));
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);
// challenge 3a
//objects examples
const jonas = {
  firstName: "jonas",
  lastName: "trump",
  age: 2037 - 1991,
  job: "programmer",
  friends: ["Michael", "Peter", "Steven"],
  heHasADriversLicsence: false,
  driverLis: function () {
    return `${this.heHasADriversLicsence ? "a" : "no"}`;
  },
};
console.log(`${jonas.firstName} is ${jonas.age}-years old ${jonas.job}, and he 
has ${jonas.driverLis()} drivers license`);
//object
//challenge 3b
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}
//for loop challenge 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(calcTip(bills[i]));
  totals.push(tip + bills[i]);
}
console.log(`bills: ${bills}
  tips: ${tips}
  total: ${totals}`);
//devloper challenge 1
//-how to print arr of number  and give days
//create a function then give arr as arguments.
// arr = [12, 5, -5, 0, 4];
// const printForcast = function (arr) {
//   for (const i in arr) {
//     console.log(`...${arr[i]}celcius in ${Number(i) + 1} days `);
//   }
// };
// printForcast(arr);
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForcast = function (arr) {
  let str = "";
  for (const i in arr) {
    str = str + `...${arr[i]} c in ${Number(i) + 1} days`;
    console.log(`...${arr[i]}celcius in ${Number(i) + 1} days `);
  }
  console.log(str);
};
printForcast(data1);
