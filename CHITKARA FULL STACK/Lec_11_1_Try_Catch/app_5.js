let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if(success){
            resolve("Task completed successfully!")
        }
        else{
            reject("Task Failed")
        }
    }, 2000)
})

promise.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
.finally(()=>{
    console.log("This is final");
    
})