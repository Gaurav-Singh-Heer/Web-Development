let x=function(gaurav){
    console.log(gaurav.target)
    console.log(gaurav)
    console.log(gaurav.type)
    console.log(gaurav.type, gaurav.clientX,gaurav.clientY)
    alert("Hello World111!")
}
btn.addEventListener('click',x)

// Click In Different Corner of Box TO GET 

// Different-Different value of gaurav.clientX  and gaurav.clientY