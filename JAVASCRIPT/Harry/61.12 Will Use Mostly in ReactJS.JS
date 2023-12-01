let obj={
    name:"Harry",
    company:"Google",
    address:"XYZ"
}

console.log({...obj,name:"Gaurav"})
console.log("")
console.log("NOW THIS WILL NOT WORK AS ...obj AFTER CHANGES")
console.log("")
console.log({name:"Gaurav Singh Heer",...obj})