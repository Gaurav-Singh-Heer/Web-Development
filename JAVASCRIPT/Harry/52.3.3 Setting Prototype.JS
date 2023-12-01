let a={
    name:"Harry",
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
a.__proto__=p                 // Important To Set ProtoType
a.run()