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



