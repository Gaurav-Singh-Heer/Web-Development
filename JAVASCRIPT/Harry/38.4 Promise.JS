let promise =new Promise(function(resolve,reject){
    alert("I am a alert in Promise")
    resolve(56)
})

console.log("Hello")
setTimeout(function(){
    console.log("Hello in 2 seconds")
},2000)

console.log("My name is "+"John")

console.log(promise)//Output:-    Promise
//                                    [[Prototype]]: Promise
//                                    [[PromiseState]]: "fulfilled"
//                                    [[PromiseResult]]: 56