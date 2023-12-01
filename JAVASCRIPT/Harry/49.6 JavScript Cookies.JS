console.log(document.cookie)
document.cookie="name=harry11123333333332240"
document.cookie="name2=harry11123333333332242"
document.cookie="name=GauravSinghHeer"

let key=prompt("Enter Your Key")
let value=prompt("Enter Your Value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// This Can read special characters as in "oyo=23" only "oyo=23" will be read
console.log(document.cookie)
//INPUT: KEY:-oyo=23                VALUE:-Gaurav
//OUTPUT name2=harry11123333333332242; name=GauravSinghHeer; oyo%3D23=Gaurav






// We Can Also decode special encodeURIComponent USING

// IN CONSOLE WRITE 
//decodeURIComponent("oyo%3D23")
//OUTPUT="oyo=23"