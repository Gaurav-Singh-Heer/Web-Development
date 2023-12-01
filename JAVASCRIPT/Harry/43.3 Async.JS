async function harry(){       //IF REMOVED async THEN ERROR WILL COME THAT .then IS NOT A FUNCTION
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },1000)
    })

    let bangloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        },2000)
    })
             
    delhiWeather.then(alert)
    bangloreWeather.then(alert)
}

console.log("Welcome To weather control Room")
harry()