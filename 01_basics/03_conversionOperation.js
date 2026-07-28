let score = 43 ;
let score1 = "43qwer" ; // this is a string ... so if you use Number ... it will be converted into NaN ...
let score2 = null; // null will beb converted into 0 ... if you  use Number ...
let score3 = undefined; // undefined will be converted into NaN ... if you use Number 
let score4 = true; // true will be converted into 1 ... if you use Number ...
let score5 = "Subhasis"; // this is a string ... so if you use Number ... it will be converted into NaN ...



console.log(score); //43qwer
console.log(typeof score);  // String 
console.log(typeof (score)); //String 


let valueInNumber = Number (score1) // this will convert String into number ...

console.log(typeof valueInNumber); //number 
console.log(valueInNumber);//NaN

//Note : When converting strings to numbers, if the string is not a valid number, it will result in NaN.
//"33" => 33
//"33abc" => NaN
//true => 1  ; false => 0



let isLoggedIn = 0;
let isLoggedIn1 = 1;
let isLoggedIn2 = 2;

let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn); //false

//note : When converting numbers to boolean, 0 will be converted into false and any other number will be converted into true.

let stringIsloggedIn ="";
let stringIsloggedIn1 ="Subhasis";

let booleanStringIsloggedIn = Boolean(stringIsloggedIn);
let booleanStringIsloggedIn1 = Boolean(stringIsloggedIn1);

console.log(booleanStringIsloggedIn); //false
console.log(booleanStringIsloggedIn1); //true


//note : When converting strings to boolean, empty string will be converted into false and any other string will be converted into true.
// 1 => true ; 0 => false
// "" => false ; "Subhasis" => true
// null => false ; undefined => false


// String
let someNumber = 42;
console.log(someNumber);
let stringNumber = String(someNumber); // this will convert number into string ...
console.log(stringNumber);
console.log(typeof stringNumber); //string



