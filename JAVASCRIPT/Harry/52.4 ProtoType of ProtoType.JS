let a={
    name2:"Harry",
    Language:"JavaScript",
    run:()=>{
        alert("self run")
    }   
}
console.log(a)


let p={
    run:()=>{
        alert("run")       // Now This  Will Not Run As a has its Own          run          Property
    }
}

p.__proto__={             // Prototype of prototype
    name:"Jackie"         // Will Run as No          name       in a 
}

a.__proto__=p                 // Important To Set ProtoType
a.run()
console.log(a.name)