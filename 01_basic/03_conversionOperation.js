let teamScore = 100
console.log(typeof teamScore)
console.log(typeof(teamScore)) //number without quotation mark

teamScore ="100" //if teamScore ="100acx" it will show NaN if teamScore = null then it will show 0 


console.log(typeof(teamScore)) // string with quotation mark 

// to convert string to number or viceversa
 
let valueInNumber = Number(teamScore)

console.log(typeof valueInNumber) //number
console.log(valueInNumber);

 
let otherTeamScore = 100
let otherValueInString = String(otherTeamScore)

console.log(typeof otherValueInString) //string
console.log(otherTeamScore); 

//for boolean value
let isLearning = 1
let isNotLearning = 0

let isTrue = Boolean(isLearning)
console.log(isTrue); //true

let isFalse = Boolean(isNotLearning)
console.log(isFalse); //false

//"" => false
// "value" => true 

/* --------Operation-------- */
let value = 100
let negValue = -value //it will make original value negative
console.log(negValue);

console.log(2+2); //basic operation
 console.log(2-2);
 console.log(2*2);
 console.log(2**3);
 console.log(2/3);
 console.log(2%3);

let str1 = "hello"
let str2 = " Sujit"

let str3 = str1 + str2
console.log(str3);

 console.log("1" + 2); //it act as string
console.log(1 + "2"); //1 is a number and 2 string
 console.log("1" + 2 + 2); // it also acts as string
 console.log(1 + 2 + "2"); // 32 will be output 

 console.log( (3 + 4) * 5 % 3); //write way to write 

 console.log(+true); //bad practice 
 console.log(+""); //bad pratice 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //not a good practice

let gameCounter = 100
gameCounter++; //increment of value
console.log(gameCounter);






