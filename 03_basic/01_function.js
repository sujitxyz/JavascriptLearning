//this is how function is written 

function testFunction(){
    console.log("S");
    console.log("u");
    console.log("j");
    console.log("i");
    console.log("t");
}

//now executing function 
testFunction()
                     //parameter
//function mathOperator(number1, number2) {
  //console.log( number1 + number2);
//}
function mathOperator(number1, number2) {
 //let result= number1 + number2
// return result
return number1 + number2
}

//mathOperator(1, 2) //arguments

let result = mathOperator(1,2)
console.log(`Result: ${result}`);

function isSleeping(userName){
    return `${userName} is sleeping`
}
 console.log(isSleeping("Sujit"));
 
//function with object
 function calculateNumber(...number1){ //rest poerator 
  return number1 
 }

 console.log(calculateNumber(100, 34, 566));


 const ojbName = {
  name: 'Sujit',
  age : 20
 }

 function personalDetails(userName){
    console.log(`My name is ${userName.name} and age is ${userName.age}`);
    
 }
 personalDetails(ojbName)
 personalDetails({
  name: "Ram",
  age: 21
 })


const numberOFmark = [90, 100, 200, 300]
   
 function studentMark(studentScore){
    return studentScore[1]
 }

 console.log(studentMark([
  90, 100, 200
 ]));
 