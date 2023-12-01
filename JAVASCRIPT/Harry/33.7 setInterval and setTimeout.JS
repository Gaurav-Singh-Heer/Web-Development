document.write("Hello!")

let a=setTimeout(function(){
    alert('I am inside of setTimeout');
},5000)
let b=prompt("Do you want to run settimeout")
if("n"==b){                //if input n then alert will not be executed else will be executed
    clearTimeout(a)
}

clearTimeout(a)            //Removed setTimeout
console.log(a)// 1(timer id)