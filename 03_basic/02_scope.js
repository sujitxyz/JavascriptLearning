
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

