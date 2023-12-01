let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    },1000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(2);
        reject(new Error("Error"))
    },2000)
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(3);
    },3000)
})

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

let promise_all=Promise.all([p1,p2,p3])             //IF FOUND ERROR IN ANY ONE PROMISE THEN IT DOES NOT WORK
promise_all.then((value)=>{
    console.log (value)
})