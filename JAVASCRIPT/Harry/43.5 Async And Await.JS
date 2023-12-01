async function harry(){       //IF REMOVED async THEN ERROR WILL COME THAT .then IS NOT A FUNCTION
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },1000)
    })

    let bangloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        },6000)
    })
             
    // delhiWeather.then(alert)
    // bangloreWeather.then(alert)
    let delhiW=await delhiWeather                               //First This Will Execute
    let bangloreW=await bangloreWeather                         //Then This Will Execute
    return[delhiW,bangloreW]                                    //Then This Will Execute

}

console.log("Welcome To weather control Room")
let a=harry()
console.log(a)