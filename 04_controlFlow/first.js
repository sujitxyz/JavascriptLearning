// if condition 
//to run a code 
if(2 === "2"){
    //condition
    console.log("Executed");   //condition true execute this
}else{
  console.log("Executed this") // false then this 
}

/*------------- Comparision-----------------*/
  // > :Greater than 
  // < :Lesser than 
  // == :equal to 
  // =! : not equal to 
  // >= greater than or equal to
  // <= lesser than or equal to 

  //how scope is work in if condition

  let score = 100
  if (score >50){
    let score2 = 90
    console.log(`oponent score is ${score2} `);  // score2n only execute in this scope 
    
  }
 // console.log(score2); score2 not exist in globally

 //shorthand notation of if condition 

 let myNumber = 1000;
 //if (myNumber === 1000) console.log("Executed this 2"), console.log(myNumber + 1);
 
//implicit scope // unreadle code and not recommendated

//nested loop 

if (myNumber < 100){
  console.log("my number is less than 100"); 

}else if (myNumber < 200){
   console.log("my number is less than 200");
  
} else if (myNumber < 500){
   console.log("my number is less than 500");
} else if (myNumber < 700){
   console.log("my number is less than 700");
} else  { //in last no condition is needed 
   console.log("my number is less than 1200");
}

// $$ and || operatror 

// to buy a phone 

let onlinePayment = true
let cashPayment
if (onlinePayment ||  cashPayment === false)  {
  console.log("let user buy a phone");
  
}

if (onlinePayment && cashPayment === false) {
  console.log("let user buy a phone");
  
} else{
  console.log("not let user buy a phone");
  
}
