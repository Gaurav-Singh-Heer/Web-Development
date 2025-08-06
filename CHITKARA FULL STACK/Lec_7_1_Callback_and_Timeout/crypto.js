const fs=require("fs")
const crypto=require("crypto")
const StartTime =Date.now()
setTimeout(()=>{
        console.log("This is timer 1")
    },0);
    setImmediate(()=>{
        console.log("this is from setImmediate")
    })
    console.log("This is from top level console log");
    fs.readFile("8july.txt","utf-8",()=>console.log("from 8 july file"))

    crypto.pbkdf2('password1',"salt1",100000,1024,'sha512',()=>{
        console.log(`${Date.now()-StartTime}`,"password1 is used for crypto2");
    })
    crypto.pbkdf2('password1',"salt1",100000,1024,'sha512',()=>{
        console.log(`${Date.now()-StartTime}`,"password2 is used for crypto2");
    })
    crypto.pbkdf2('password1',"salt1",100000,1024,'sha512',()=>{
        console.log(`${Date.now()-StartTime}`,"password3 is used for crypto2");
    })
    crypto.pbkdf2('password1',"salt1",100000,1024,'sha512',()=>{
        console.log(`${Date.now()-StartTime}`,"password4 is used for crypto2");
})
