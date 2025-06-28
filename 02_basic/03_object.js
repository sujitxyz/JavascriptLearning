//singleton 
//only one object
//Object.create



//object literals


let mySym = Symbol("Computer")

let user1 = {
    name: "Sujit",
    //keys: Value 
    "last name": "Bhusal",
    [mySym]: "IT",
   age: 20,
   idNo: 44,
   email: "sujit@email.com",
   isLoggedIn: true,
   lastLoginDays: ["Sunday", "Monday"]
}
//to access the value 
console.log(user1.name);
console.log(user1["age"]);
console.log(user1["last name"]);
console.log(user1[mySym]);
console.log(user1.idNo); //44


//to change the value of object 
user1.idNo = 40
console.log(user1["idNo"]);//40

//to not to change the value
//Object.freeze(user1)
//user1.name = "Aayush"
//console.log(user1);


user1.greeting = function(){
  console.log("Hello! Namaste!!");   
}

user1.greetingTwo = function(){
  console.log(`Hello! Namaste!! ${this.name} ${this["last name"]}`);   
}
console.log(user1.greeting());
console.log(user1.greetingTwo());




