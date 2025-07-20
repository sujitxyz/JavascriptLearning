class User {
    constructor(name, password) {
        this.name = name;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }

}

const user1 = new User("Sujit", "123vha")
console.log(user1.name);
console.log(user1.password);
 