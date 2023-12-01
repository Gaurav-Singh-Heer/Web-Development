// Synchronous Programming
let a=prompt("What is your name?");
let b=prompt("What is your age?");
let c=prompt("What is your favourite color?");
console.log(a + " is " + b +" years old and has " + c +" favourite color. ")

// Asynchronous Programming
console.log("Start")
setTimeout(function(){                  //Asyncronous Line, Sent at background to run later
    console.log("Hey I am good")        //Asyncronous Line, Sent at background to run later         
},4000);                                //Asyncronous Line, Sent at background to run later

console.log("End")