
// for in loop 

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    py: "python",
    c: "C"
}


for (const key in myObject) {
    //console.log(`${key} :- ${myObject[key]}`);
}

const arr = ["javascript",
     "C++",
     "ruby",
     "python",
     "C"
]

for (const key in arr) {
       // console.log(key);   
}

//array and map is not iterable in for in loop 
