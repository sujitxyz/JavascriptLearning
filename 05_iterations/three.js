//for of loop 

// ["", "", "" ]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num)
    
}

const greetings = "Hello World!"

for (const greets of greetings) {
    if (greets === " ") {
        continue
    }
    //console.log(greets);
    
}

//maps
const map = new Map()
map.set("A", 1)
map.set("B", 2)
map.set("C", 3)
map.set("D", 4)

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value)
    
}
 

// const myObject = {
//     'Place1': 'Kathmandu',
//     'Place2': 'Lalitpur',
//     'Place3': 'Chitwan'
// }
// for (const [key,value] of myObject) {
//     console.log(key, value);
    
// }

//forof cant iterate objects 