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