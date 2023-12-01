let x=function(e){
    alert("Hello World111!")
}
let y=function(e){
    alert("Hello World222!")
}

btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a=prompt("What is your favourite number?")
if(a=="2"){
    btn.removeEventListener('click',function(e){
        alert("Hello World111!")
    })
}

//THIS WILL REMOVE NOT REMOVE EVENT x WHEN INPUT IS 2