'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    // this function looks for firstname, age and birthyear in its scoop and if it cant find it goes into its parents scope and up further if needed
    let output = `You're name is ${firstName}, you are ${age} years old and were born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // this will ot cuase an error because var are function scoped variables which can be called so long as its within its scope i.e. this function printAge
      // var millenial = true;

      // Creating new variable with same name as out scopes variable
      const firstName = 'Bob'; // this will override parent scope

      // The new variable being reassigned
      output = 'New OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // if you remove const from this statement it will replace the parent output with the string but as it is now it creates a new variable with the same name inside this scope
    }
    // this will cause an error becausese const and let are block scope variables which means they are only accesbile in the lbock they are defined
    // console.log(str);
    // console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Sergio';

calcAge(1991);

// this will cause an error because the age variable is a child scope
// console.log(age);
