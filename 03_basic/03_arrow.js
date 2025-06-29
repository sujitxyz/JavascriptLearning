
 
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
