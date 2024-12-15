const fs=require("fs");

fs.readFile("./3_3_Contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result)
    }
})