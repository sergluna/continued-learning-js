// 9. Values and Variables
/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);

let Name = "Jonas";
console.log(Name);

let country = "usa";
let continent = "north america";
let population = 8000000000;

console.log(country, continent, population);

let halfOfPop = population / 2;
console.log(halfOfPop);
halfOfPop++;
console.log(halfOfPop);
let finlandPop = 6000000000;
console.log(finlandPop > population);
console.log(33000000 > population);
const description =
  "Portugal is in Europe, and its 11 million people speak portugese";
console.log(description);
*/

// 11. Data Types
/*
let javascriptIsFun = true;

console.log(javascriptIsFun);

console.log(typeof true);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
*/

// 12. let, const and var
/*
const birthYear = 1991;
// birthYear = 1990;

Use const when you dont want the variable to change
Use let when it can be changed
*/

// 13. Basic Operators

// const now = 2037;
// const ageSerg = now - 1991;
// const ageSara = now - 2018;
// console.log(ageSerg, ageSara);

// console.log(ageSerg * 2, ageSerg / 10, 2 ** 3); // ** means exponents

// const firstName = "serg";
// const lastName = "luna";
// console.log(firstName + " " + lastName);

// // Assignment Operators
// let x = 10 + 5;
// x += 10; // 15 + 10 = 25
// x *= 4; // 24 * 4 = 100
// x++; // 25 + 1 =26, this adds one
// x--; // 25 - 1 , this minus 1
// console.log(x);

// // Comparison Operators

// console.log(ageSara > ageSerg); // >, <, >=, <=
// console.log(ageSara >= 18);

// const isFullAge = ageSara >= 18;

// console.log(now - 1991 > now - 2018);

// 14. Operrator Precedence

// const now = 2037;
// const ageSerg = now - 1991;
// const ageSara = now - 2018;
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageSara + ageSerg) / 2;
// console.log(ageSerg, ageSara, averageAge);

// Coding Challenege 1

// let markHeight = 1.69;
// let johnHeight = 1.95;

// let markWeight = 78;
// let johnWeight = 92;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

// 17. Strings and Temporal literals

// const firstName = "sergio";
// const job = "worker";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// 18. Taking Decisions if/else

// const age = 17;

// if (age >= 18) {
//   console.log("sara can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`sara is not old enough. wair another ${yearsLeft} year(s)`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // Challenge 2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
// } else {
//   console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIJohn}`);
// }

// 20. Type Conversion and Coercion

// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jones"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old"); // the plus triggers a coercion to strings
// console.log("23" - "10" - 3); // the minus triggers coercio to numbers
// console.log("23" - "10" + 3);

// let n = '1' + 1; // becomce string 11
// n = n - 1; // becomes number 10
// console.log(n);

// 21. truthy falsy

// 5 falsy values
/*  0, " ", undefined, null, NaN */

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("get a job");
// }

// let height = 1;
// if (height) {
//   console.log("yay its defined");
// } else {
//   console.log("its not defined");
// }

// 22. Equality Operator

// const age = 18;
// if (age === 18) {
//   console.log("the are old enough");
// } else {
//   console.log("underaged");
// }

// const favorite = Number(prompt("what is you favorite number?"));

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   // "23" == 23
//   console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("number is not 23 or 7");
// }

// if (favorite !== 23) {
//   console.log("why not 23");
// }

// 24. Logical Operators

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("sara is able to drive");
// } else {
//   console.log("someone else should drive...");
// }

// const isTired = false; // C

// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("someone else should drive");
// }

// Challenege 3

// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// } else if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else {
//   console.log("Koalas with the trophy");
// }

// 26. the switch statement

// const day = "monday"; // day === monday
// switch (day) {
//   case "monday":
//     console.log("plan my course structure");
//     console.log("Go to coding meet up");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("record vids");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enojoy the weekend :D");
//     break;
//   default:
//     console.log("not a valid date");
// }

// if (day === 'monday')  {

// } else if (day === 'tuesday') {

// } else if (day === 'tuesday') {

// } else if (day === 'wednesday' || day === 'thursday') {

// } else if (day === 'friday') {

// } else if (day === 'saturday' || day === 'sunday') {

// } else {

// }

// 28. conditional operator (turnery)

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 😀")
//   : console.log("i like to drink water 💧");

// const drink = age >= 18 ? "wine" : "water";

// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }

// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// challenge 4

// const bill = 275;

// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was $${bill}, the tip was $${tip} and the total value was $${
//     bill + tip
//   }`
// );
