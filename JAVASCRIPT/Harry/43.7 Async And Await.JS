async function harry(){       //IF REMOVED async THEN ERROR WILL COME THAT .then IS NOT A FUNCTION
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },2000)
    })

    let bangloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        },5000)
    })
             
    // delhiWeather.then(alert)
    // bangloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait...")
    let delhiW=await delhiWeather                               //First This Will Execute
    console.log("Delhi Weather is:"+delhiW)


    console.log("Fetching Banglore Weather Please wait...")
    let bangloreW=await bangloreWeather                         //Then This Will Execute
    console.log("Banglore Weather is:"+bangloreW)

    return[delhiW,bangloreW]                                    //Then This Will Execute

}

console.log("Welcome To weather control Room")
let a=harry()
a.then((value)=>{                    
    console.log(value)            // Gives output as Array(2)
})
console.log(a)