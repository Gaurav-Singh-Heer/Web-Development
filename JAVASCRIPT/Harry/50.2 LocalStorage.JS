let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key,value)
// In Inspect see Applications->LocalStorage

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

//IN CONSOLE WRITE
//localStorage.length                     //To get Length of LocalStorage
//localStorage.key(index)           // Index can be any number         // To print key at that index