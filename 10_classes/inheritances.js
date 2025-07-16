class user{
    constructor(username){
      this.username = username
    }
    printMe(){
        console.log(`UserName is: ${this.username}`)
    }
}

class buyer extends user{
    constructor (username, email, id){
        super(username)
         this.email = email
         this.id = id
    }
    addCart(){
        console.log(`A new item was added by ${this.username}`)
    }
}
const user1 = new buyer("Sujit", "email@email.com", 44)
console.log(user1)