console.log(document.cookie)
document.cookie="name=harry11123333333332240"
document.cookie="name2=harry11123333333332242"
document.cookie="name=GauravSinghHeer"

let key=prompt("Enter Your Key")
let value=prompt("Enter Your Value")
document.cookie=`${key}=${value}`// Cannot read special characters as in "oyo=23" only oyo will be read
console.log(document.cookie)