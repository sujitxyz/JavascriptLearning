let score = 100
console.log(score);
//it is Number 
 
let newScore = new Number(100)
console.log(newScore);
//It convert into object which contain Number

console.log(newScore.toString().length);//it convert number to string to use string method

console.log(newScore.toFixed(2)); //it gives fixed value 

let h = 229.448834
console.log(h.toPrecision(4));
//it give precise value or output 

const payment = 1249503499
console.log(payment.toLocaleString('en-In'));//it convert number into number system according to country 





