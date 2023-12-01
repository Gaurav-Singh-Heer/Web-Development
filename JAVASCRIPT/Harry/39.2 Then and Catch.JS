let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        alert("I am a promise and I am fulfilled")
    }, 5000)
})