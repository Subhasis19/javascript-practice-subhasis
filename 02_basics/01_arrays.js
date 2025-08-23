// Array 

const myarr = [1,2,3,3,4,5,6]
const Heros = ["Shaktiman" , "IronMan"]

const Array2= new Array(1,2,3,4,2,4,5)

// console.log(myarr[0]); //you can print one element using index 

// console.log(Heros.length);

// Array method 

// myarr.push(6)
// myarr.push(7) //add value in last   
// myarr.pop()  // this will remove the last value

// myarr.unshift(8) //Inserts new elements at the start of an array
// myarr.shift() //Removes the first element from an array 

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9)); // if the element is not present , it  will print -1 , if the element is present it will give it's index number 

// const newArray = myarr.join() // array into a string

// console.log(typeof newArray);
// console.log(myarr);

console.log("A " , myarr);
const Myn1 = myarr.slice(1,3);//Returns a copy of a section of an array. For both start and end

console.log(Myn1);

console.log("B " , myarr);
const Myn2 = myarr.splice(1,3)//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(Myn2);

console.log("C " , myarr);
