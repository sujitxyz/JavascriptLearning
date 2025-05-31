
const myName = "Sujit Bhusal" 
/*
const is only used in constant value like myName because probably my name won't be change 
*/
let myEmail= "bhusal@gmail.com"
/*
  let is used when the value **might change** later.
For example, I might want to update my email in the future:
*/ 

var address = "Kathmandu"
/*
var is function-scoped and was commonly used before ES6.
It's not recommended now because it can lead to confusing behavior:
*/

myPhone = 2343445
/*
This creates a global variable without `var`, `let`, or `const`, which is bad practice.
We should always declare variables explicitly:
*/

//let just declared a variables
let myschool; // it will be undefined 
myschool = "TIA"

console.log(myName); // It only show one value at a time 
  
//to show a all value we should:
console.table([myName, myEmail, address, myPhone, myschool])

/*myName = "Random"*/ 
//it is already declared no change will occured 

myEmail = "bhusal2@gmail.com" // this value can be changed
address = "Kawasoti" // this value can be changed
myPhone = 112234   // this value can be changed

