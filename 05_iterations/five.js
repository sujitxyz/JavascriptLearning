//for each loop 


const coding = ["javascript",
     "C++",
     "ruby",
     "python",
     "C"
]

//how to write for each function 

//by function(){}
// coding.forEach(function(item){
//     console.log(item);    
// })

//by arrow function
// coding.forEach((item) => {
//     console.log(item);
// })

//third way

function printMe(item){
    console.log(item)
}
// coding.forEach(printMe)
 
// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr)
// })

const people = [
  { id: 0,
     name: "Alice" },
  { id: 1,
     name: "Bob" },
  { id: 2, 
    name: "Charlie" }
]


people.forEach((item)=>{
 console.log(`${item.id} and ${item.name}`)
})