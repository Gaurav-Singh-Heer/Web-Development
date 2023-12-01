let p1=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am fulfilled")
        resolve(true)
        // reject(new Error ("I am an error"))
    }, 5000)
})


let p2=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and I am rejected")
        // resolve(true)
        reject(new Error ("I am an error"))
    }, 5000)
})

p1.then((value)=>{
    console.log(value)
})

p2.catch((error)=>{
    console.log("some error occured in p2")
})

// IN CONSOLE WRITE:-

// INPUT:-        p1
// OUTPUT:-       Promise {<fulfilled>: true}
//                [[Prototype]]: Promise
//                [[PromiseState]]: "fulfilled"
//                [[PromiseResult]]: true

// INPUT:-        p2
// OUTPUT:-       Promise {<rejected>: Error: I am an error
//                at http://127.0.0.1:5500/39.10%20Then%20and%20Catch.JS:16:16}
//                [[Prototype]]: Promise
//                [[PromiseState]]: "rejected"
//                [[PromiseResult]]: Error: I am an error at http://127.0.0.1:5500/39.10%2