 // for loop 

 for (let j = 1; j < 10; j++) {
   const element = j;
   //console.log(element);
}


//nested loop 
for (let i = 1; i <= 5; i++) {
   //console.log(`Outer loop value: ${i}`);
     for (let j = 1; j <= 10; j++) {
       //console.log(`Inner loop value ${j} and inner loop ${i}`);
        
    
   }
  
}

//multiplication table 

for (let i = 1; i <= 5; i++) {
   //console.log(`Multiplication table of: ${i}`);
     for (let j = 1; j <= 10; j++) {
       //console.log(`${i} * ${j} = ${i * j}`);   
   }
  
}

//for loop in array 

let placesInNepal = ["Kathmandu", "Lalitpur", "Chitwan"]

for (let i = 0; i < placesInNepal.length; i++) {
  const element = placesInNepal[i];
  //console.log(element);
  
}

//break and continue 

 for (let j = 1; j < 10; j++) {
  if (j === 5) {
   // console.log(`5 is best number`);
   // break
  }
   const element = j;
   //console.log(element);
}
//above code will print upto 5 is best number 
/*
1
2
3
4
5 is best number
*/

for (let j = 1; j < 10; j++) {
  if (j === 5) {
   console.log(`5 is best number`);
  continue
  }
   const element = j;
   console.log(element);
}
// it will continue printing output after printing 5 is best number
/*
1
2
3
4
5 is best number
6
7
8
9
*/