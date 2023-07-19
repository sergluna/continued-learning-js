"use strict";

// 31. strict mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriverLicense = true;
// }
// if (hasDriversLicense) console.log("i can drive");

// // const interface = "Audio";
// // const private = 534;
// // const if = 23;

// 33. Functions

// function logger() {
//   console.log("my name is sergio");
// }

// // calling, running or invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const applOrangeJuice = fruitProcessor(2, 4);
// console.log(applOrangeJuice);

// 34. Function declaration vs. Expressions

/* Function Declaration */
// function calcAgeOne(birthYear) {
//   return 2037 - birthYear;
// }

// const ageOne = calcAgeOne(1991);
// console.log(ageOne);

// /* Funcion Expression */
// const calcAgeTwo = function (birthYear) {
//   return 2037 - birthYear;
// };

// const ageTwo = calcAgeTwo(1991);
// console.log(ageTwo);

// 35. Arrow Functions

// // Function Expression
// const calcAgeTwo = function (birthYear) {
//   return 2037 - birthYear;
// };

// // Arrow Function, returns value implecently no need for return
// const calcAgeThree = (birthYear) => 2037 - birthYear;
// const age3 = calcAgeThree(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement}`;
// };

// console.log(yearsUntilRetirement(1991)); // leaving out name returns undefined
// console.log(yearsUntilRetiremenr(1982, "Bob"));

// 36. Functions calling other functions

// function cutFruit(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);
//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// 37. Reviewing

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} is passed retirement age`;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Stan"));

// Challenge 1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas * 2) {
//     return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas > avgDolphins * 2) {
//     return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     return console.log(`There are no winners`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// 39. introduction to arrrays

// const friend1 = "michael";
// const friend2 = "steve";

// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);

// const year = new Array(1991, 1984, 2020);
// console.log(year);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const jonas = ["Jonas", "Luna", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// // xercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const ageOne = calcAge(years[0]);
// const ageTwo = calcAge(years[2]);
// const ageLast = calcAge(years[years.length - 1]);

// const ages = [ageOne, ageTwo, ageLast];

// console.log(ages);

// 40. Baasic Array Operations (Methods)

// Add Elements
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // Remove Elements
// friends.pop(); // removes the last element
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift(); // removes first
// console.log(friends);

// console.log(friends.indexOf("Steven")); // returns index of value

// console.log(friends.includes("Steven")); // checks to see if value is in array, uses === to check
// console.log(friends.includes("tim"));

// Challenge 2
/* this sort of worked it would work better with a loop probably */
// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     tips.push(bill * 0.15);
//     total.push(bill + bill * 0.15);
//   } else {
//     tips.push(bill * 0.2);
//     total.push(bill + bill * 0.2);
//   }
// }

// const calcTip = function (bill) {
//   // this will just return tip
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

// 42. Intriduction to objects
// order does not matter when we want to retrieve
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Luna',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['John', 'Bob', 'Tim']
// }

// 43. Dot vs Bracket Notation

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Luna",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Bob", "Tim"],
// };

// console.log(jonas);
// // dot notation
// console.log(jonas.lastName);
// // bracket notation
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interstedIN = prompt(
//   "What do you to know about jonas? Choose between age, first name, last name, job and friends."
// );

// if (jonas[interstedIN]) {
//   console.log(jonas[interstedIN]);
// } else {
//   console.log("The valuse does not exisit");
// }

// jonas.location = "portugal";
// jonas["twitter"] = "@jonasdsdf";
// console.log(jonas);

// // Challenge
// // "Jonas has three friends and his best friend is called Michael"
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`
// );

// 44. Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Luna",
//   // age: 2037 - 1991,
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Bob", "Tim"],
//   hasDriversLicense: false,

// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// },

// calcAge: function () {
//   console.log(this);
//   return 2037 - this.birthYear;
// },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     // this is the jonas object, 'this' is the object that is calling it
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     } and he ${
//       this.hasDriversLicense ? "has" : "doesn't have"
//     } a drivers license`;
//   },
// };

// // console.log(jonas.calcAge());
// // console.log(jonas.age);

// // Challenge
// // "Jonas is a 46 year old teacher and he does have/doesn't have a drivers license."

// console.log(
//   `${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job} and he ${
//     jonas.hasDriversLicense ? "has" : "doesn't have"
//   } a drivers license`
// );

// console.log(jonas.getSummary());

// Challenge 3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// function calcBMI() {
//   if (mark.calcBMI() > john.calcBMI()) {
//     console.log(
//       `${mark.fullName}'s BMI (${mark.calcBMI()}) is higner than ${
//         john.fullName
//       }'s (${john.calcBMI()})!`
//     );
//   } else if (john.calcBMI() > mark.calcBMI()) {
//     console.log(
//       `${john.fullName}'s BMI (${john.calcBMI()}) is higner than ${
//         mark.fullName
//       }'s (${mark.calcBMI()})!`
//     );
//   }
// }

// calcBMI();

// 46. The Loop

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights rep ${rep} 🏋️‍♂️`);
// }

// 47. Looping Arrays

// const jonas = [
//   "Jonas",
//   "Luna",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Bob", "Tim"],
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // reading from jonas array
//   console.log(jonas[i]), typeof jonas[i];
//   // filling types array
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log("----Only Strings----");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("----Break with Number----");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// 48. Looping backwards and loops inside looops

// const jonas = [
//   "Jonas",
//   "Luna",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Bob", "Tim"],
// ];

// // 0,1 ..... 4
// // 4,3,......0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// // Loop in  a loop
// for (let excercise = 1; excercise < 4; excercise++) {
//   console.log(`---- Starting Excercise ${excercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight rep ${rep} 🏋️‍♂️`);
//   }
// }

// 49. While Loop
// While loop is good for when you dont know how many interations youll need before hand

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight rep ${rep} 🏋️‍♂️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE LOOP: Lifting weight rep ${rep} 🏋️‍♂️`);
//   rep++;

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("You got a 6! Loop will now end....");
//   }
// }

// Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  // this will just return tip
  let tip =
    bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
  tips.push(tip);
  totals.push(tips[i] + bills[i]);
}
console.log(bills, tips, totals);

/* this didnt work */
// let sum = 0;
// for (let i = 0; i < totals.length; i++) {
//   sum = sum + totals[i];
// }

// const calcAverage = function () {
//   return sum / totals.length;
// };

// calcAverage();

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
