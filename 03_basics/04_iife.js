//this is a normal function .

function one(){
    console.log(`DB connected.`);
}

one();



// IIFE (Immediately Invoked Function Expression)

(function two(){
    // this also called named iife . cuz it has a name that is "two"...
    console.log(`DB connected. 2nd`);
})();


// "An IIFE (Immediately Invoked Function Expression) is a function in JavaScript that is executed as soon as it’s defined. It helps avoid polluting the global scope and is often used for data privacy, initialization, or wrapping code." put the function inside the () and at the end put another () to execute it sometging like this(function (){ })();

// and if you are writting multipul iife the you have to put semicolon ; at the end ,,, cuzz """In JavaScript, if you don’t put a semicolon after the first IIFE, the JavaScript engine tries to treat the second (function two(){...})(); as an argument to the first IIFE’s returned value.)"""

// you also can do it in arrow function  &give parameters

( (name) => {
    console.log(`Hello , Welcome back ${name}`);
    
} ) ("Subhasis") 