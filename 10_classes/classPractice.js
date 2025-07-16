// ES6

class user{
    constructor(username, email, password){
         this.username = username
         this.email = email
         this.password = password
        }
        encryptPassword(){
           return `${this.password}xyz`
        }
}

const user1 = new user("Sujit", "email@email.com", "1234")
console.log(user1.encryptPassword());


//behind the scences

function user2(username, email, password) {
         this.username = username
         this.email = email
         this.password = password
}
user2.prototype.encryptPassword = function () {
   return `${this.password}xyz`
}

const user2 = new user2("Sujit", "email@email.com", "1234")
console.log(user2.encryptPassword());
