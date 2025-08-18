// primitive

// 7 types  : String , Number , Boolean , null , undefined , Symbol , BigInt



const score = 100
const scoreVAlue = 100.23

const isLogedIn = false
const outSideTemp = null
let userEmail ; //undefined

const Id = Symbol("123")
const anotherId = Symbol("123")

// console.log(Id === anotherId); // false  (unique even with same description)

let bigNumber = 23457823432423098765434567887654n  // put n at the end to represent bigint

// console.log(typeof bigNumber , bigNumber); // bidint 





// non-primitive (or reference)

// Array , Object , Function

// this is an array 
const heros = [ "Shaktiman " , "naagraj " , "Dogesh "]
// console.log(heros);

// Object
let user  = {
    name : "Subhasis" ,
    age : 23
}

// console.log(user.name);
// console.log(user.age);


// function

const MyFunction = function (){
    console.log("HEllo World..");
}

// MyFunction();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack and heap, heap(Non primitive)

// stack and heap
let MyName = "Subhasis"

let FullName = MyName;
FullName = "Subhais Samantasinghar";

// console.log(MyName);
// console.log(FullName);

// heap(Non primitive)

let userOne = {
    userEmail : "subhasis@gmail.com",
    upi: "Subhasis@yml"
}

let userTwo = userOne;

userTwo.userEmail = "userTwo@gmail.com"

console.log(userOne.userEmail);
console.log(userTwo.userEmail);



