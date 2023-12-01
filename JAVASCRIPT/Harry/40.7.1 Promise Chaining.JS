const loadScript=(src)=>{
    return new Promise((resolve,reject) =>{
        let script= document.createElement("script")

        script.type="text/javascript"
        script.src=src
        document.body.appendChild(script)
        script.onload=()=>{
                resolve(1)
        }
            script.onerror = ()=>{reject(0)}
    })
}

let p1 = loadScript("https://localhost:3000index.js")
p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("We are sorry but we are having problems loading this script")
})