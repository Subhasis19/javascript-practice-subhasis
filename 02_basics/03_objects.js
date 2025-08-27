//singleton
// Object.create

// Object literals

const jsUser  = {
    name : "Subhasis",
    "Full name " : "Subhasis Samantasinghar",
    age: 23 ,
    location : "Blr",
    email : "subhais@google.com",
    isLoggedIn : false
}

// console.log(jsUser.isLoggedIn);  // ypu can access the object like this..
// console.log(jsUser["email"]);
// console.log(jsUser["Full name "]);


// if you want to change the value of an object  , you cando it like this 

jsUser.email = "Subhasis@chatgpt.com"
// console.log(jsUser.email);
// Object.freeze(jsUser) //freezePrevents the modification of existing property attributes and values, and prevents the addition of new properties.
jsUser.email = "Subhasis@tesla.com"
// console.log(jsUser.email);

jsUser.greeting = function (){
    console.log("Hello JS User!!");
}

jsUser.greetingTwo = function (){
    console.log(`Hello JS User , ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
