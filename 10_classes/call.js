function Username(name){
    this.name = name
 }

 function personalDetail(name, email, address){
      Username.call(this, name)
      this.email = email
      this.address = address
 }

 const detail1 = new personalDetail("Sujit", "sujit@email.com", "Kathmandu")

 console.log(detail1);
 