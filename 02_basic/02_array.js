const placeName = ["Kathmandu", "Pokara", "Chitwan"]
const placeName2 = ["Kawasoti", "Budhanillkanta", "Bharatpur"]

//placeName.push(placeName2) //it merge 2 array 
//console.log(placeName);

//let mergePlace = placeName.concat(placeName2); //it merge 2 or more array in proper array 
//console.log(mergePlace);

let mergePlace = [...placeName, ...placeName2]; //spread operator 
console.log(mergePlace);  


let id = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

let id2 = id.flat(4) //it flatten array in single array 
console.log(id2);

 


console.log(Array.isArray("Sujit")); //it ask it is array 
console.log(Array.from("Sujit")); //it make array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //it convert into array 

