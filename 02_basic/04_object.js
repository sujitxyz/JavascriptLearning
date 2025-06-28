//Singleton Object

let instaUser = new Object()


//literal object is
//let FaceBookUser = {}
//console.log(FaceBookUser);

instaUser.id = "Sujitxyz"
instaUser.name = "Sujit"
instaUser.isloggedin = true





//object inside object (Nested object)

const user1 = {
    idNumber: 1,
    fullName: {
        firstName: "Sujit",
        lastName: "Bhusal"
    },
    address: "Kathmandu"
}
console.log(user1.fullName.firstName);

//combining two or more object 

const obj1 = {1: "a", 2: "B"}
const obj2 ={3: "c", 4: "D"}

//const obj3 = { obj1, obj2} wrong approach 


//const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

//how value come from database
const user2 =[ {
    idNumber: 1,
    address: "Kathmandu"
},
 {
    idNumber: 1,
    address: "Kathmandu"
},
 {
    idNumber: 1,
    address: "Kathmandu"
},
 {
    idNumber: 1,
    address: "Kathmandu"
}]

//to access the value 
console.log(user2[1]);

console.log(instaUser)
console.log(Object.keys(instaUser));//it shows the key of object 
console.log(Object.values(instaUser));//it show the value of object


 console.log(instaUser.hasOwnProperty('Name'));//it show proproties exist or not 

 //Destuructring of object 
 let user3 = {
   idNumber: 1,
    userAddress: "Kathmandu",
    userName: "Sujit",
    email: "Bhusal@email.com"
 }
                   
//  user3.userAddress
//it is right but to write cleaner version of it

const {userAddress: address} = user3
//console.log(userAddress);
console.log(address);
