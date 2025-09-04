function  SayMyName() {
    console.log("S")
    console.log("u")
    console.log("b")
    console.log("h")
    console.log("a")
    console.log("s")
    console.log("i")
    console.log("s")
}

// SayMyName();


function addTowNumbers(num1 , num2 ){
    return num1+num2
}

// const addTowNumbers = (a , b) => Number(a) +Number(b)

// console.log(addTowNumbers(2,5));

function loginUserMessage1(username = "Sam"){  // you can also give some default values Ex: (username = "Sam")

    // if ( username === undefined){
    if (!username){  // this means notUsername / false userame , same as username === undefined
        console.log("Please enter a username..");
        return
    }
    return`${username} just loggedin`
}

// function loginUserMessage(username){
//     console.log(`${username} just loggedin..`);
// }

// loginUserMessage("SAM")
// console.log (loginUserMessage1("Subhasis"))
// console.log (loginUserMessage1())



function calculateCartPrice ( ...num ){
    return num
} 

// console.log(calculateCartPrice(1232,4332512,423432,345));

// The rest operator in JavaScript, denoted by three consecutive dots (...), is a feature introduced in ES6 (ECMAScript 2015) that allows you to collect an indefinite number of arguments into an array. Its primary use case is within function parameters to handle a variable number of arguments. 


let user  = {
    name : "Subahsis",
    price : 199
}

function handleObject(Anyobj){
    console.log(`Username is ${Anyobj.name} and the price is ${Anyobj.price}`);
}

// handleObject(user)

function returnSecondValue (arr ){
    return arr[1]
}

const MynewArray = [1,245,321432,4124325,3456]

// console.log(returnSecondValue(MynewArray))
// we can also directly pass the array..
console.log(returnSecondValue([123,2345,1234512,3412345,234]))

