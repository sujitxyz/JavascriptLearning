
//global scope
//let a = 30 
//const b = 21
//var c = 34
  
//{}varaiable inside curly brackett is local scope 
let a = 300
if(true){ //local varaible 
    let a = 30 
    const b = 21
   // var c = 34        
   console.log(a);//30 cause it local scope
          
}
//var is not used mostly because it create more error and it violate scope 

console.log(a); //it will show a= 300 cause of global scope 
//console.log(b);
//console.log(c);

 //nested scope 

 function one(){
    const username = "Sujit"  // scope one

    function two(){  // scope two

        const address = "Kathmandu"
        console.log(username); //for scope 2 username is global scope 
    }
    //console.log(address); //it only available in scope 2 so address is not declared in scope 1
    
    two()
 }
 one()
 

 if (true){ //scope1
     const userName = "Sujit"
     if(userName === "Sujit"){ //Scope2
     const address = "Kathmandu"
     console.log(`${userName} ${address}`); // username is global scope of scope 2
     }
     //console.log(address); it doesnt contain in scope1
 }
 //console.log(userName); it contain inside scope1 and not contain in global scope

 
  //Concept of Hoisting

 console.log(User(5))
  function User(Id){
      return Id       //we can write this way function is not stored in variables 
  }
 // User(5)


//console.log(someData(2)); Cannot access 'someData' before initialization
//because function is stored in varaiable
  const someData = function(Id2){
    return Id2
  }

 // someData(2)