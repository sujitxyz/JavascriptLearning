let address = ["Kathmandu","Lalitpur", "Chitwan"]

let addressSpeciallity = {
    Kathmandu: "Kathmandu Darbar Square",
    Lalitpur: "Patan Darbar Square",
    Chitwan: "Chitwan National Park",

    getKathmanduSpeciallity: function(){
       return `Kathmandu speciallity is ${this.Kathmandu}`
        
    }
}

console.log(addressSpeciallity.getKathmanduSpeciallity())


Object.prototype.sujit = function(){
    console.log("Sujit is prensent in all object")
}

// addressSpeciallity.sujit()
address.sujit()


//inheritance

const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
}

const dog = {
  barks: true
}

//old styles

// dog.__proto__ = animal

// console.log(dog.eats);
// console.log(dog.walk());

//new style 
Object.setPrototypeOf(dog, animal)

console.log(dog.eats)
console.log(dog.walk())

//practical approach 

let userName = "Sujit    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is ${this.trim().length}`)
}

userName.trueLength()
"Ram".trueLength()