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