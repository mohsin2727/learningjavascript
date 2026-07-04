"use strict";

/*
Revision
- History of Javascript
- variables, constants
- How to save the program to GitHub
- Two ways of executing program, one from borwser, and the other from command line
- var let const
- case sensitive
*/

//let email = "test@test.com";
let email = "test1@test.com"; //Global variables
var buildingNo="7864";
console.log(email)
function welcomePatient(patientName)
{
    const clinicName = "ABC";
    var buildingNo = "Bcere123";
    let email="locahost@email.com";
    let greeting= "Welcome to " +  clinicName;
    console.log(greeting + " " + patientName ,"!");
    console.log(email);
    console.log(buildingNo); 
}
welcomePatient("Mark");
console.log(buildingNo);
console.log(email);