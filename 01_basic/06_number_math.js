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



/*********Math****************/



console.log(Math); //it is object 

console.log(Math.abs(-4));//its provide absolute value 

console.log(Math.round(3.5)); //it round of the value

console.log(Math.ceil(5.2)); //it round of the value but upper value//6 

console.log(Math.floor(5.2)); //it round of the value but lower value //5

console.log(Math.min(5, 4, 9, 1)); //it help to find minimum value  //1

console.log(Math.max(5, 4, 9, 1)); //it help to find maximum value //9

console.log(Math.random()); //provide random value between 0-1 

console.log((Math.random()*10) + 1); // provide value 1-10

console.log(Math.floor(Math.random()*10) + 1);// give value 1 to 10 

//Most important formula 

const min = 100
const max = 200

console.log(Math.floor(Math.random() * (max - min + 1)) + min)



