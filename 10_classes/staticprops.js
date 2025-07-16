class user {
    constructor(username) {
        this.username = username
    }
    printme(){
        console.log(`Username: ${this.username}`);
    }
     static createdId(){
        return 123
    }
}
const user1 = new user("Sujit")
// console.log(user1.createdId())
//static stop the works

class buyer extends user{
    constructor (username, email){
        super(username)
         this.email = email
    }
    addCart(){
        console.log(`A new item was added by ${this.username}`)
    }
}

const user2 = new buyer("Ram", "email@gmail.com")
console.log(user2);

// user2.createdId()
