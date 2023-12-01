btn.addEventListener('click',function(e){
    alert("Hello World1!")
})

btn.addEventListener('click',function(e){
    alert("Hello World2!")
})

let a=prompt("What is your favourite number?")
if(a=="2"){
    btn.removeEventListener('click',function(e){
        alert("Hello World!")
    })
}

//THIS WILL NOT REMOVE EVENT