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
console.log (loginUserMessage1())