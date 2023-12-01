let x=function(e){
    console.log(e.target)
    alert("Hello World111!")
}
let y=function(e){
    console.log(e)
    alert("Hello World222!")
}

btn.addEventListener('click',x)
// btn.addEventListener('click',y)

// let a=prompt("What is your favourite number?")
// if(a=="2" || a=="1"){
//     btn.removeEventListener('click',x)
// }

//THIS WILL REMOVE EVENT x       IF INPUT IS 2 or 1
