function multiply(num){
    return num*5
}

multiply.power=2
// console.log(multiply.power)
// console.log(multiply(5) * multiply.power);
// console.log(multiply.prototype);


function userName(name, id){
       this.name = name
       this.id = id
}
 
userName.prototype.address = function userAddress(){
   return `${this.name} address is Kathmandu`  
}
userName.prototype.idIncrement = function idPlus() {
   return this.id ++
}

const name1 = new userName("Sujit", 40)
const name2 = new userName("Ram", 30)
console.log(name1.address())
console.log(name2.idIncrement())
console.log(name1);
