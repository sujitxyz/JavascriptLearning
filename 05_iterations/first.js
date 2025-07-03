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
  console.log(element);
  
}