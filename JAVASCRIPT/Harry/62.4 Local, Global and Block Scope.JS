let p=9         //Global
function ax(){
    let b=8                                     //Function Level Scope
    console.log(p)
    console.log(b)
}
ax()
console.log(p)
console.log(b)// Will Give Error