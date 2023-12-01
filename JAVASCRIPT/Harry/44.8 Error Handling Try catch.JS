setTimeout(()=>{
    console.log("Hacking wifi.... Please wait..." ) 
}, 1000)
try{
    setTimeout(()=>{       // ERROR WILL  BE HANDLED AS WROTE     console.log(rahul) inside try catch in setTime
        try{
            console.log(rahul)              //And Try Catch is outside setTimeout 
        }
        catch(error){

        }
    },1000)

}
catch(error){                          //error or err or gaurav or swati
    console.log("Balle Balle")            //Write balle balle if error comes
}

setTimeout(()=>{ 
        console.log("Fetching username and password.... Please wait..." )
}, 2000) 
    
setTimeout(()=>{ 
    console.log("Hacking Rahul's facebook id.... Please wait..." )
}, 3000) 
    
setTimeout(()=>{ 
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
}, 4000) 