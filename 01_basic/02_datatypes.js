"use strict"; // treat newer version of js and prevent error 

//alert(1 + 1) //it only work in browser not in node js as we are using node js

//example of bad code
/*
console.log(1 + 1); console.log("Sujit")
*/ //code are in same in line and difficult to read a code 
//better we can do is
console.log(1 + 1)

console.log("Sujit"); //Now it readable 

//but 
console.log(1+
    1
)// is bad practice and affect the readabillity of code 

let myName = "Sujit"
let myAge = 20
let isLearning = true

//types of dataTypes are:
/*
number => 2 to power 53
bigint 
string => ""
boolean => true or false
null => standalone value and represent empty value 
undefined => value is not assigned 
symbol => unique

object
*/

console.log(typeof "Sujit"); // typeof is use to find datatype 
console.log(typeof myAge);

console.log(typeof null); //object 
console.log(typeof undefined); //undefined

