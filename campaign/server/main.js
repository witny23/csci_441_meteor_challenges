import {Candidates} from './../imports/api/candidates.js';



// convert the following line into an ES6 function
Meteor.startup(function(){

  // ES5 function
  let multiply = function (x,y){
    return x * y;               // we take the anonymous function and store it on the multiply variable
  }
  console.log(multiply(10,5));

  function squareNamed(x,y){return x*y}; // named function that produces same result
  console.log(squareNamed(10,5));

  // problem - arrow functions do not support the named function syntax
  // all arrow functions are anonymous functions which means you must use the let variable syntax

  // with the arrow function problem in mind, create an ES6 addition 
  //  function (using statement syntax - squigglies and a return statement) 
  //  that returns the sum of two numbers. Then call your function and log the result


  




  // create an ES6 subtraction function (using expression syntax - one line of code, 
  //  no squigglies, no return statement) that returns the difference of two numbers. 
  //  Then call your function and log the result


  




  // the following is an ES5 Example which will be used in the next challenge
  let numbers = [2, 4, 6, 8];

  let goOdd = numbers.map(function(number){
    return number -1;
  });
  console.log(goOdd);

  // using ES6 expression syntax, create a named function called goDouble 
  //  that maps the numbers array and returns an array with all numbers doubled
  //  call and log the named function


  




});
