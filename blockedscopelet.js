"use strict";

let score2; //only declaration
score2 = 5; //initialisation
let lastName = "Steve"; //declaration as well as initialization
function demonstrateHoisting() {
  let option = 5;
  if (true) {
    console.log("Before declaration:", score2); //Cannot use this will give error unlike in var
    let score = 100;
    console.log("After declaration:", score);
    console.log(score);
  }
  //hoisting
  //console.log(score); //cannot use this as it is block scope and works within if only
}
//console.log(option);
demonstrateHoisting();
//console.log(score);//cannot as not declared at global level adn block scope let cannot be accessed

