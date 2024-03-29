'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     // this function looks for firstname, age and birthyear in its scoop and if it cant find it goes into its parents scope and up further if needed
//     let output = `You're name is ${firstName}, you are ${age} years old and were born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // this will ot cuase an error because var are function scoped variables which can be called so long as its within its scope i.e. this function printAge
//       // var millenial = true;

//       // Creating new variable with same name as out scopes variable
//       const firstName = 'Bob'; // this will override parent scope

//       // The new variable being reassigned
//       output = 'New OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}.`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       // if you remove const from this statement it will replace the parent output with the string but as it is now it creates a new variable with the same name inside this scope
//     }
//     // this will cause an error becausese const and let are block scope variables which means they are only accesbile in the lbock they are defined
//     // console.log(str);
//     // console.log(millenial);
//     // add(2, 3);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Sergio';

// calcAge(1991);

// // this will cause an error because the age variable is a child scope
// // console.log(age);

// Hoisting with variables
// // console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Sergio';
// let job = 'Web dev';
// const year = 1991;

// // Hoisting with functions

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingcart();

// // var is hoistied as undifined so the if above is executed
// var numProducts = 10;

// function deleteShoppingcart() {
//   console.log('All products deleted');
// }

// global scope
// console.log(this);

// undifined

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// // global scope
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1991);

// sergio.calcAge();

// const maria = {
//   year: 2017,
// };

// maria.calcAge = sergio.calcAge;

// // this wll still point to maria because its the method that called it even though its in sergio object
// maria.calcAge();

// var firstName = 'Matilda';

// const sergio = {
//   firstName: 'Sergio',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1, ES6
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// sergio.greet();
// sergio.calcAge();

// // Arguments
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5);

// let age = 30;
// let oldAge = age;
// age = 32;
// console.log(age);
// console.log(oldAge);

// const sergio = {
//   name: 'sergio',
//   age: 30,
// };

// const friend = sergio;
// friend.age = 27;
// console.log('Friend: ', friend);
// console.log('Me', sergio);

// prinative types
let lastName = 'Luna';
let oldLastName = lastName;
lastName = 'davis';

console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Luna',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log('before marriage:', jessica);
console.log('after marriage', marriedJessica);

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Luna',
  age: 27,
  family: ['tom', 'beth'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('jon');

console.log('before marriage:', jessica2);
console.log('after marriage', jessicaCopy);
