let name = "Sujit" 
let lastNAme = "Bhusal"
console.log(name + " " + lastNAme) //Sujit Bhusal 

console.log(`My name is ${name} ${lastNAme}`) //My name is Sujit Bhusal

 

let myaddress = "Kathmandu"
 console.log(myaddress.length); //9 it shows a length of strings 
 
console.log(myaddress[0]); //it shows the particular postion of strings At 0 postion there is K as as string alway count 1st as 0

//likewise
console.log(myaddress[1]); //a
console.log(myaddress[2]); //t
console.log(myaddress[3]); //h
console.log(myaddress[4]); //m
console.log(myaddress[5]); //a
console.log(myaddress[6]); //n
console.log(myaddress[7]); //d
console.log(myaddress[8]); //u
console.log(myaddress[9]); //undefined cause js tends to show less error as js is forgiving language  

/* Important concept of String methods */
console.log(myaddress.charAt(1)); //it shows the character at a specific location //a

console.log(myaddress.includes('a'));//it check if string contains something //true 


console.log(myaddress.toUpperCase());// it convert into uppercase
console.log(myaddress.toLowerCase());//it convert into lowercase


console.log(myaddress.slice(1,8)); //it slice Kathmandu from k and u but not includes u 


console.log(myaddress.replace("Ka","La"));//in word Kathmandu Ka is replaced by La It replace word 
//console.log(myaddress); but it doesnt change original value 

let a = "Name"
let b = "address"
 
console.log(b.concat(a, "Kathmandu")); //it is used to add a strings


let c ="   Chitwan  "
console.log(c.trim()); //remove whitespace






