
// var c = 30 
// "We avoid var because it is function-scoped, not block-scoped, which often causes unexpected behavior. It also gets hoisted and initialized as undefined, which can lead to bugs. Moreover, var allows redeclaration of variables, which is risky. Instead, modern JavaScript uses let for variables that can change, and const for constants, since they are block-scoped and safer."


let a = 400 //global scope 

if (true) {
    let a = 10  // Block Scope
    const b = 20 
    // console.log("Inner : ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


function one () {
    const username = "Subhasis"

    function Two(){
        const website ="Youtube"
        console.log(username);
    }
    // console.log(website); //you can not access the inner blocks variable 

    Two()

}
// one()

if (true) {
    const user = "Subhasis"
    if (user === "Subhasis") {
        const web = " YouTube"
        // console.log(user + web);
    }
    // console.log(web);
}

//+++++++++++++interesting ++++++++++++

console.log(addone(5)) //you can call this function anywhere in the code .

function addone(num ){
    return num+ 1
}

// console.log(addtwo(5));  // you can not access the function before initialization. so this will give you error ...

const addtwo = function (num){
    return num + 2
}

