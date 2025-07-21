const User = {
    _email: "EmAil@email.com",
    _password: "123",

    get email(){
        return this._email.toLowerCase()
    },
    set email(value){
        this._email = value.toLowerCase()
    }
}

const user1 = Object.create(User)
console.log(user1.email);
