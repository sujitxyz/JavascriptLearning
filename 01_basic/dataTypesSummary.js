/* 
  There are two types of datatypes:
  1) Primitive 
      :String
      :Number 
      :Boolean 
      :Null
      :Undefined
      :Symbol
      :BigInt 
*/
/*
  2)Non-Primitive 
       :Function
       :Object
       :Array
*/
//js is dynamically typed language 

let score = 100;
//it doesnt need to defined a typed 

let isLoggedIn = true;
//boolean value 

 let secondValue = 33.3
 //flot value and number 

 let phoneNumber;
 //undefined  

 let thirdValue = null;
//null and object 

 let id = Symbol('123')
 let nextId = Symbol('123')
 console.log(id === nextId); //false

 let hugeNumber = 12334566775n //undefined 
 //n used for Bigint 

 let carBrand = ["BYD", "BMW", "TATA"];
//object that represent car brands

/*let personalDetail= {
    name:"Sujit",
    age: 20
}*/
//example of array 

let myName = function(){
  console.log("Sujit Bhusal");
}
//Example of function 


/*
  Stack Memory(Primitive) amd Heap Memory (Non-Primitive)
*/
  
  let myCountry = "Nepal"
  let anothercountry = myCountry
 
  anothercountry = "USA"
  console.log(anothercountry);//USA
  console.log(myCountry); //Nepal 
  //Examples of Stack memory


  let personalDetail= {
    name:"Sujit",
    age: 20
}
  let studentDetail = personalDetail
  studentDetail.age =21 
  console.log(personalDetail.age); 
  //Example of heap memory
  
  