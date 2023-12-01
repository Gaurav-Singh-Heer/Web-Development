let x=function(e){
    alert("Hello World111!")
}
let y=function(e){
    alert("Hello World222!")
}

btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a=prompt("What is your favourite number?")
if(a=="2" || a=="1"){
    btn.removeEventListener('click',x)
    btn.removeEventListener('click',y)
}

//THIS WILL REMOVE EVENT x and y BOTH   IF INPUT IS 2 or 1
