//declare
//1-->literal(not singleton)
//2-->constructor
// singleton -> made from constructor
// Object.create

//object literals

const mySm = Symbol("Key1")//can't be used directly
                    //key & value
const JsUser = {
    name : "Neharika",
    //can't be accessed using the .email method
    "full name": "neharika tripathi",

    age : "22",
    location: "Jabalpur",
    email : "neharika@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
} 
//how to access
console.log(JsUser.email);//okay okay but
console.log(JsUser["email"]);










