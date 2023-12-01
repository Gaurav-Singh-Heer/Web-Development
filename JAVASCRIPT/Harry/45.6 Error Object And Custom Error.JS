try{
    let age=prompt("Enter Your age")
    age=parseInt(age)                                      //OR  age=Number.parseInt(age)
    if (age>150){
        throw new ReferenceError("This is Probably Not True")   //(error.name) is ReferenceError
    }
}
catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
    console.log(error)
}

console.log("This script is still running")