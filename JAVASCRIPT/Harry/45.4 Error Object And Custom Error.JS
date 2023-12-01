try{ 
    // throw new Error("Harry is not Good")         //(error.name) is Error
    throw new ReferenceError("Harry is not Good")   //(error.name) is ReferenceError
}
catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
    console.log(error)
}