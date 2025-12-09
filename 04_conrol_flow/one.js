// control flow 

// if
const isLogIn = true;

// if (isLogIn) {
//     console.log("welcome User ");
    
// }


// if (2 === "2") {
//     console.log("Excuted")
// }

// <, > , <= , >= , == ,!= ,=== ,!== ,

const temperature = 41;

// if (temperature < 50){
//     console.log("temperature is is less tahn 50 ")
// } else {
//     console.log("temperature is is greater tahn 50 ")
// }



// const score =200;

// if (score > 100){
//     let power = "Fly"
//     console.log(`User power is : ${power}`)
// }


const balance = 1000 ;

// if (balance > 500 ) console.log("test"), console.log("test2"); // this is not recomended ...

// if (balance <500 ){
//     console.log("les than 500")
// } else if(balance < 750 ) {
//     console.log("les than 750")
// } else if(balance < 900 ) {
//     console.log("les than 900")
// } else if(balance < 1200 ) {
//     console.log("les than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFormGoogle = true
const loggedInFormEmail = false

if ( userLoggedIn && debitCard ){
    console.log("Allow to buy .")
}   

if (loggedInFormEmail || loggedInFormGoogle){
    console.log("User Logged in..");
    
}
