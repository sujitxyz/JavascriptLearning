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






