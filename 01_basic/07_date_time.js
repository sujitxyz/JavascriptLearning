let todayDate = new Date()
console.log(todayDate.toString()); //it show todays date

console.log(todayDate.toDateString()); //proper date

console.log(todayDate.toISOString()); //date and time

console.log(todayDate.toJSON()); //date and time

console.log(todayDate.toLocaleDateString()); //date 

console.log(todayDate.toLocaleString()); //date and time

console.log(typeof todayDate); //object

//let myBirthday = new Date(2025, 7 , 1)
//let myBirthday = new Date(2025, 7 , 1, 4, 30)
let myBirthday = new Date("2025-08-01")
console.log(myBirthday.toLocaleString()); //created date 

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myBirthday.getTime());

console.log(Math.floor(Date.now()/1000)); //convert milli-second into second

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1); //it is get a month from date

console.log(newDate.getDay()); //it is used to get day from date 



newDate.toLocaleString('default', {
    weekday: "long",
    
}) //it is used to format date object 






