import {Candidates} from './../imports/api/candidates.js';



// convert the following line into an ES6 function
// Meteor.startup(function(){
Meteor.startup(() => { 

  // ES5 function
  let multiply = function (x,y){
    return x * y;               //we take the anonymous function and store it on the multiply variable
  }
  console.log(multiply(10,5));

  function squareNamed(x,y){return x*y}; // named function that produces same result
  console.log(squareNamed(10,7));

  // problem - arrow functions do not support the named function syntax
  // all arrow functions are anonymous functions which means you must use the let variable syntax

  // with the arrow function problem in mind, create an ES6 addition 
  //  function (using statement syntax - squigglies and a return statement) 
  //  that returns the sum of two numbers. Then call your function and log the result

  let add = (x,y) => {  // don't need to state function
    return x + y;   // this is known as statement syntax (squiggly and return used)
  }
  console.log(add(4,3));


  // create an ES6 subtraction function (using expression syntax - one line of code, 
  //  no squigglies, no return statement) that returns the difference of two numbers. 
  //  Then call your function and log the result

  let subtract = (x,y) => x - y; // this is known as expression syntax (no squiggly, no return)

  console.log(subtract(6,3));


  // the following is an ES5 Example which will be used in the next challenge
  let numbers = [2, 4, 6, 8];

  let goOdd = numbers.map(function(number){
    return number -1;
  });
  console.log(goOdd);

  // using ES6 expression syntax, create a named function called goDouble 
  //  that maps the numbers array and returns an array with all numbers doubled
  //  call and log the named function

  let goDouble = numbers.map((number) => number * 2);
  console.log(goDouble);


});
