// Immediately Invoked Function Expressions (IIFE)

// iife is written by ({}) ();
(function test(){
    //name iife 
    console.log(`testing IIFE`);   
}) ();

((name) => {
    console.log(` ${name} is Testing IIFE 2`);
}) ("Sujit")

//it is used to control pollution of global variables