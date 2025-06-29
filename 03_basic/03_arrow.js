
 
const user = {
    userName: "Sujit",
    age: 20,

    personalDetails: function(){
         console.log(`${this.userName} age is ${this.age}`);
         console.log(this);
         
    },
    
}
//this refer to current context 

user.personalDetails()
user.userName = "Ram"
user.personalDetails()
console.log(this); //current context is {}

function experiment(){
    let userName = "Sujit"
    console.log(this.userName); //undefined //it doesnt find context in function
    
}
experiment()


const experiment2 = function(){
    let userName = "Sujit"
    console.log(this.userName);//undefined 
}
experiment2()

const experiment3 = () => {
    let userName = "Sujit"
    console.log(this.userName);
}
experiment3()
//this only works in object 


//Arrow function 
//1 way
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(7,6));


//2 way

const calculateTwo = (num1 , num2) => num1 + num2

console.log(calculateTwo(1,2));



const addtwo = (num1, num2) => (num1 + num2)
console.log(addtwo(9,1));
 /* if {} is used in arrow function we need to used return 
 and () is used not need to used return 
 */



 // to return object 

 const returnObject = () => ({userName: "Sujit"})
 console.log(returnObject());
 