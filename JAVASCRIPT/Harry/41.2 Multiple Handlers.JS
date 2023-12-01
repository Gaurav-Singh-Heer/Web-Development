let p1 =new Promise((resolve,reject)=>{
    alert("Hey I am not Resolved")
    setTimeout(()=>{
        resolve(1);
    },2000)
})
p1.then(()=>{
    console.log("Congratulations this promise is now resolved")
})