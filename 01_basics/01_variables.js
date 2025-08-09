const accountId  = 1234567
let accountemail = "Subhasis@gmail.com"
var  accountPassword = "12345"
accountCity = "Odisha"
let accountState; //undefined 

// accountId =2 //not allowed

accountemail = "sub@gmail.com"
accountPassword = "2121212"
accountCity = "bengaluru"

/* 
prefer not to use var 
because of issue in block scope and functional scope 
*/ 
console.log(accountId);

console.table([accountId , accountPassword, accountemail, accountCity ,accountState])
