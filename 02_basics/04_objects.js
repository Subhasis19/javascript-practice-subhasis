const tinderUser = new Object() //singleton
tinderUser.id = "123asd"
tinderUser.name = "Sam"
tinderUser.isLoggedIn= false

// console.log(tinderUser);


const regularuser ={
    email:"lol@gmail.com",
    username : {
        UserFullName : {
            FirstName :"Subhasis",
            lastName  :"Samantasinghar"
        }
    }
}

// console.log(regularuser.username.UserFullName.FirstName);

const obj1 ={
    1 : "a",
    2 : "b"
}

const obj2 ={
    2 : "c",
    3 : "d"
}

// const obj3 = Object.assign({}, obj1 , obj2)
// console.log(obj3);

obj3 = { ...obj1 , ...obj2} 
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


