
//how to create promise and how resolve is work

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        //console.log("ASYN task")
        resolve()
    }, 1000);
})

promiseOne.then(function(){
   setTimeout(()=> {
     //console.log("promise consumed")
   }, 1000)
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        //console.log("ASYN task2")
        resolve()
    }, 3000);
}).then(function(){
   setTimeout(()=> {
     //console.log("promise consumed 2")
   }, 4000)
})

// how data is passed in promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        //console.log("ASYN task")
        resolve({"userName": "Sujit", "id":40})
    }, 1000);
})
promiseThree.then(function (user) {
    console.log(user);
    
})

//how to use promise, reject and finally
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error) {
           resolve({"userName": "Sujit", "id":40}) 
        }else{
            reject("ERROR: Something went wrong")
        }
        
    }, 1000);
})
promiseFour
.then(function(user){
    console.log(user)
    return user.userName
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("it give error or username"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
           resolve({"userName": "Ram", "id":40}) 
        }else{
            reject("ERROR: Something went wrong")
        }
        
    }, 1000);
})
//asyn and await

async function consumePromiseFive() {
    try{
        const respone =await promiseFive
        console.log(respone)
    }catch (error){
       console.log(error)
    }
}

consumePromiseFive()

//api related work by async await

// async function learningApiPromise()  {
// try {
//     const respone = await fetch('https://randomuser.me/api/')
//    const data = await respone.json()
//    console.log(data)

// } catch (error) {
//     console.log("E:", error)
// }
// }
// learningApiPromise()


//same process by promise

fetch('https://randomuser.me/api/').then(function(respone){
       return respone.json()
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log("E:", error);
})