"use strict" // treats all the code as modern js code and avoid some of the old js issues

// Data types in js

// 1. Primitive data types
let userName = "Subhasis" // String 
let age = 23 // Number
let isLogedin  = false // Boolean
let state ; // undefined
let city = null // null

console.log(userName);
console.log(age);
console.log(isLogedin);
console.log(state);
console.log(city);

console.log(typeof userName);
console.log(typeof age);
console.log(typeof isLogedin);
console.log(typeof state);
console.log(typeof city); // object    -- null
console.log(typeof null);// typeof null null shows object 

//Number 
// string
// boolean
// undefined
// null
// Symbol


// 2. Non-primitive data types
// 1. Object 
let person = {  
    name : "Subhasis",
    age : 23,
    isLogedin : false
}

console.log(person);
console.log(typeof person); 

// 2. Array
let arr = [1,2,3,4,5]
console.log(arr);
console.log(typeof arr); // type of array is -> object    -- array

//object 
//array
