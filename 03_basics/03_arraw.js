const user = {
    userName : "Subhasis",
    price : 399,

    welcomeMessage : function (){
        console.log(`${this.userName} , just loggedin..`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()

// function one (){
//     let userName = "Subhasis"
//     // console.log(this);
//     console.log(this.userName);
// }

// const one = function (){
//     let userName = "Subhasis"
//     console.log(this);
//     console.log(this.userName);
// }

const one = () =>{
    let userName = "Subhasis"
    console.log(this);
}
// one()

// function addTwoNumbers(num1 , num2 ) {
//     return num1+ num2
// }

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }

// const addTwoNumbers = (num1, num2 ) => num1 + num2

// const addTwoNumbers = (num1, num2 ) => ( num1 + num2)

const addTwoNumbers = (num1, num2 ) => ( {username : "Subhasis"}) // () this will help me objects ...

// console.log(addTwoNumbers(2,3));

let myArray =[123,234,234]

myArray.forEach(function(){
    
})