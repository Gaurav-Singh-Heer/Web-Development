let x = document.getElementsByTagName('span')[0]
console.log(x)
console.dir(x)
let y = document.getElementsByTagName('span')[0]
console.log(y)
console.dir(y)
console.log(document.body.firstChild.nodeName) 
console.log(document.body.firstElementChild.nodeName)  //text as IN HTML CODE 1st is Hello World which is text

console.log(" ")
console.log(first.innerHTML)
first.innerHTML 
first.innerHTML = "<i>hey I am italic</i>" 
console.log(first.innerHTML)

console.log(" ")
console.log(first.outerHTML)
first.outerHTML 
first.outerHTML = "<h1>hey</h1>"
console.log(first.outerHTML)

console.log(" ")
console.log(first.textContent)
document.body.firstChild.data 
console.log(document.body.textContent)
first.hidden = false