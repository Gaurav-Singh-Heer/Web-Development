document.write("Hello!")

let a=setTimeout(function(){
    alert('I am inside of setTimeout');
},5000)

console.log(a)// 1(timer id)