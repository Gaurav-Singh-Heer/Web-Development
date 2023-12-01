const f=()=>{
    try{                     // WHEN NO ERROR IN TRY AND WE RETURN
        let a=0
        // console.log(program)  // Error As program is not a variable
        console.log("Program ran successfully")
        return
    }
    catch(err){
        console.log("this is an error")
        console.log(p)
    }
    finally{
        console.log("I am a good boy") // Will be Executed Always
    }
}

f()