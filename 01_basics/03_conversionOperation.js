let score = "33asc" 
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(valueInNumber); //NaN  / Not a Number 
// console.log(typeof (valueInNumber));



// "33" => 33
// "33abc" => NaN /Not a Number 
// true =>1 ; false => 0


let isLogedIn = 1 

let booleanIsLogedIn = Boolean(isLogedIn)
// console.log(booleanIsLogedIn); //true 

// 1 => true ; 0 => false
// "" => false
// "Subhasis" => true


let num =22
let stringNum = String(num)
// console.log(stringNum);
// console.log(typeof(stringNum));


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);  // add
// console.log(2-2);  // sub
// console.log(2*2);  //multi
// console.log(2**3); //Power
// console.log(2/2);  //Division
// console.log(2%2);  //reminder

let str1 = "Hello" 
let str2 = " Subhasis" 
let str3 = str1 +str2
// console.log(str3);


// console.log("1" +2); //convert into string op => 12
// console.log(1 +"2"); //12
// console.log("1" +2 + 2);  //122
// //if their us a Strung first it will treat everything as String.

// console.log(1 +2 + "2");  // => 32 First add 1+2 then convert intoo string op will bw 32.

// console.log(+true);
// console.log(+"");


let ganeCounter = 100
// ganeCounter++ //postfix
++ganeCounter  //prefix

console.log(ganeCounter);
