

var score1 = 5;
function demonstrateHoisting() {
  var score2=10;
  if (true) {
    console.log("Before declaration:", score2);
    var score1 = 100;
    console.log("After declaration:", score1);
  }
  //var score1 = 100; //can be reassigned.

  console.log("Outside block", score1);
}
demonstrateHoisting();
console.log(score1);
//console.log(score1);


/*
var is not a block scope
var is function scoped
*/