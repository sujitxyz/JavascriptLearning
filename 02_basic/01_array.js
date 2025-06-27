//array

const id = [1, 2, 3]
const name = ["Ram", "Shyam", "Hari"]

const id2 = new Array(4, 5, 6)
//way of declaring array 

console.log(id[1]);

//array method 

id.push(4) //adding new value in array 
id.pop() //remove the last value of array 

id.unshift(0) //add item in 0th position 
id.shift() //remove item in 0th position 
console.log(id);

console.log(id.includes(3)); //it help to determine item includes or not 

console.log(id.indexOf(3)); //it determine position of item 

const newId = id.join() //it convert array into string 

console.log(newId);



const id3 = [0, 1, 2, 3, 4, 5, 6, 7]
console.log("I", id3);

const newId2 = id3.slice(1, 4) //it include 1 and not include 4 


console.log(newId2);
console.log('II', id3);

const newId3 = id3.splice(1,4) //it manipulate original string 
console.log(newId3);
console.log("III", id3);







