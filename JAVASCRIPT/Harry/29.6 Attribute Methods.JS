let first = document.getElementById("first");//define first by this line or not no harm _it is just a good practice

let a=first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

// first.setAttribute("hidden","true")
// first.setAttribute("class","true sachin")

//SEE in inspect->Elements Code                 Class "true sachin is replaced by"hey"

console.log(first.attributes)
console.log("  ")
first.removeAttribute("class")
console.log(first.attributes)