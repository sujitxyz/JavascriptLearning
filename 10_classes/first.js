// let name = "Ram"

// const person = {
//   name: "Sujit Bhusal",
//   location: "Nepal",
//   age: 20,
//   profession: "Student",
  
//   personalDetail: function(){
//     console.log(`${this.name} and ${this.location}`);
    
//   }
// }

//console.log(person.personalDetail());

//this is for current context

function personalDetail(name, location, age){
      this.name = name
      this.location = location
      this.age = age
      return this 
}

const personalDetail1 = new personalDetail("Sujit", "Kathmandu", 20)
const personalDetail2 = new personalDetail("Ram", "Lalitpur", 21)

 console.log(personalDetail1);
 console.log(personalDetail2);


 //new create new instances 
 

