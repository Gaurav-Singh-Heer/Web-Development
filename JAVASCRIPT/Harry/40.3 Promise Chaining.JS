let p1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolved in 2 seconds ")
        resolve(56)
    },2000)
})

p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve, reject)=>{
            resolve("Promise 2")
        })
        return p2
   
})
 // let p2=new Promise((resolve, reject)=>{
    //     resolve("Promise 2")
    // })
    // return p2


    //                 OR
    
    
    // return new Promise((resolve, reject)=>{
    //     resolve("Promise 2")
    // })
    // return p2       //NOW NO NEED OF THIS