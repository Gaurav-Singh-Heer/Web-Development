let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    },11000)
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

// let promise_all=Promise.all([p1,p2,p3])             //IF FOUND ERROR IN ANY ONE PROMISE THEN IT DOES NOT WORK
// let promise_all=Promise.allSettled([p1,p2,p3])      //WILL GIVE OUTPUT OF ALL PROMISE(INCLUDED ERROR)            
// let promise_all=Promise.race([p1,p2,p3])            //IF FOUND ERROR IN ANY ONE PROMISE THEN IT DOES NOT WORK
// let promise_all=Promise.any([p1,p2,p3])           //WAITS FOR 1ST PROMISE WITH LEAST TIME TO FULFIL(ERROR EXCULUDED)
let promise_all=Promise.resolve(6)                      //GIVES 6 IN OUTPUT AND ERROR OF p2  
promise_all.then((value)=>{
    console.log (value)
})