import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js';


Meteor.startup(function(){

    class Animal {
  
    };
    let kitten = new Animal();
    console.log(kitten);  //  logs empty object which is expected
  
  
    class Animal_2 {
      constructor(name){  // constructor called behind the scenes
        this.name = name; // stores name on Animal2 instance
                          // different instances can have different stored names
      }
    } // no comma or semi - this is correct class definition for ES6
    let kitten_2 = new Animal_2('Dora');
    console.log(kitten_2);
  
  
    class AnimalDefault{  // can set up default constructor values in case a value is not provided
    constructor(name='No Name Yet'){
      this.name = name;
      }
    }
    let kittenDefault = new AnimalDefault();
    console.log(kittenDefault);
  
    // how do we create methods?
    class Animal_3{
        constructor(name='No Name Yet'){
          this.name = name;
        }
        getGreeting(){
          // return custom gretting using the kitten's name
          // will use ES6 template strings
          // these are designed to make it easy to inject values into a strings
          // will use the back tick which is to the left of the 1 key
          // return 'hi, i am ' + this.name'; will work but template strings are better
          return `Hi, i am ${this.name}`; // this is a js expression
        }
      }
      let kitten_3 = new Animal_3('Banksy');
      console.log(kitten_3.getGreeting());
  
  
  /* challenge
  
  create an Animal_4 class
    - create two options for the constructor function, one for name and another for breed
        - set the default value for name to be 'Unknown' 
        - set the default value for breed to be 'unknown'
    - create a getGreeting method 
        - using a template string, return a statement such as 'This kitten's name is Dora'
    - create a getKittenDescription
        - using a template string, return a statement such as 'Dora's breed is grey tabby'

  Create a kitten_4 object with no arguments passed to the constructor
    - call/log kitten_4's getGreeting and getKittenDescription methods

  Create a kitten_5 object with a name and breed passed to the constructor
    - call/log kitten_5's getGreeting and getKittenDescription methods

  */
  
    







  
/*
  Create a new class called Pet that extends Animal_4
    - create four options for the constructor function: name, breed, favorite_toy, and owner
        - use super to assign name and breed (this for fav_toy and owner)
        - set the default value for favorite_toy to be 'mouse' 
        - set the default value for owner to be 'HSYC'
    - create a getFavToy method 
        - using a template string, return a statement such as 'GoGo's favorite toy is a mouse' 
    - create a getOwner method 
        - using a template string, return a statement such as 'GoGo's owner is Pat' 

  Create a kitten_6 object with no arguments passed to the constructor
    - call/log kitten_6's getGreeting and getKittenDescription methods
    - call/log kitten_6's getFavToy and getOwner methods

  Create a kitten_7 object with a name and breed passed to the constructor
    - call/log kitten_7's getGreeting and getKittenDescription methods
    - call/log kitten_7's getFavToy and getOwner methods
*/

 











    
  });
