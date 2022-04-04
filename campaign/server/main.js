import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js';


Meteor.startup(function(){

 
  });

// Two new ES6 Features
//  - Object Spread Operator
//  - Object Property Shorthand


// Object Spread Operator example
//  - allows one to copy all the properties of one object onto another object

let programmer_one = {
  name: 'Ada Lovelace',
  occupation: 'Computer Scientist',
  known_for: 'Contributions to CS',
}
console.log(programmer_one);

let programmer_two = {
  known_for: 'Creator of COBOL',
}
console.log(programmer_two);  // expect to see { known_for: Creator of COBOL } show up in terminal


let person_three = {// Object Spread Operator allows us to spread out an
  ...programmer_one,    // object's properties into another object
  ...programmer_two,    // this one replaces programmer_one's know_for with programmer_two's know_for
  name: 'Grace Hopper',      // notice the ... which is the spread syntax
}                   
console.log(person_three)


// Object Property Shorthand example
//  - a way to define object properties when you have a variable w/ same name

let computer = 'windows';
let os = '10';
let pc = {
  computer: computer, // value of computer getting set with a variable of the same name
  os,                 // since the name is the same, we can use this shorthand
}
console.log(pc);


let country = {
  country_name: 'China',
  city: 'Tokyo',
}
let language = 'Mandorin Chinese';

// mini challenge
// - create a new object then console log that object so it will
//    look like the following when logged

//      { country_name: China, city: Beijing, population: 21540000, language: Mandorin Chinese }

// notice the city changed, country_name stayed the same, language variable was used
//  and a new population: 21540000 property was created

//  make sure to use Object Spread Operator and Object Property Shorthand
//    to recreate the previous object







