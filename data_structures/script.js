"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 Hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  // stores first ingredient in mainIng and the rest are stored in an array
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

/////////////
// Rest Pattern and Parameters
/////////////

// 1 Destructuring

// This is SPREAD because is on the right side of =
const arr = [1, 2, ...[3, 4]];

// This is REST because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(arr);
console.log(a, b, others);

// Using REST ad SPREAD, the spread operator must come last when destrcturing because JS wont know when to collect the remaining elements
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2 Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 2, 7);

// after x is spread into add they will be collected unto numbers array by rest parameter
const x = [23, 4, 5];
add(...x);

restaurant.orderPizza("peperoni", "tomatoes", "mushrooms", "peppers");

/*

////////////////
Spread Operator
////////////////

// Old way of spreading
const arr = [7, 8, 9];
const oldWayArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(oldWayArr);

//// ES6 with Spread operator, ...

// wihout ... this will create an array inside of an array instead of spreading
const newArr = [1, 2, ...arr];
console.log(newArr);

// this logs each element in newArr
console.log(...newArr);

// you can take an array and spread inside of another to make a new arrray
const newMenu = [...restaurant.mainMenu, "Sandwich"];
console.log(newMenu);

// Important use cases
// Create Shallow Copies and Joining Arrays

// Create copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Joining
const joinedMenu = [...mainMenuCopy, ...newMenu, ...restaurant.starterMenu];
console.log(joinedMenu);

// Iterables

const str = "Sergio";
const name = [...str, " ", "L."];
console.log(name);

// Prompt to gather info
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 3 ?"),
//   prompt("Let's make pasta! Ingredient 2 ?"),
//   prompt("Let's make pasta! Ingredient 3 ?"),
// ];

// // calling the method from restaurant
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { ...restaurant, founder: "Sergio L.", foundedin: 1991 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Sergio's Bistro";
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

/*
////////////////////////////////////

Destructuring Objects

restaurant.orderDelivery({
  time: "22:30",
  address: "1 drive Ln",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "1 drive Ln",
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, tags, hours);

// Defaukt Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 1000;
let b = 1200;

const obj = { a: 23, b: 25, c: 45 };

({ a, b } = obj);

console.log(a, b);

// Nested Objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

/*
///////////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// When JS sees [] on the left side it knows to destructe the array
/// It takes first data and assigns it to x, so on and so forth
const [x, y, z] = arr;
console.log(x, y, z);

// Another example but with a way to skip the second data point by leaving the second element blank
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// without destructuring we need a temp variable to reassign
// const temp = main
// main = secondary
// secondary = temp

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// Nested Destructuring
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values, useful when we get data from an api
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//   openingHours: {
//     {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
*/
