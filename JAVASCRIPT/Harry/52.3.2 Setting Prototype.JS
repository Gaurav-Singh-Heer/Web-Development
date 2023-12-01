let a={
    name:"Harry",
    Language:"JavaScript"
}
console.log(a)

let p={
    run:()=>{
        alert("run")
    }
}
a.__proto__=p                 // Important To Set ProtoType
a.run()