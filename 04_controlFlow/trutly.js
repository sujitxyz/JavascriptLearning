let userName = []

if (userName) {
    console.log("Got name");
    
} else{
    console.log("not got name");
    
}

//falsly value 

//false, 0 , -0, BigInt, 0n, "", null, undefined, NaN


//truthy value 
//"0", "false", " ", "value under quatation mark", [], {}, function(){}


if (userName.length === 0) {
    console.log("array is empty");
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish coalescing operator (??) null or undefined

let val1;
//val1 = 5 ?? 10
//val1 = 10 ?? 5
//it gives first value 

//val1 = null ?? 10
//val1 = 10 ?? null
//it avoid null which gives error

//val1 = undefined ?? 20
//val1 =  20 ?? undefined 

val1 = null ?? 20 ?? undefined


//this operator avoid null and undefined

console.log(val1);
