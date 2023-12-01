document.write("Hello")

const sum=(a,b)=>{
    console.log("Yes I am running "+(a+b))
    a + b
}

setInterval(sum,2000,1,2)
//(name,delay,a,b)

const Mul=(a,b,c,d)=>{
    console.log("Yes I am running "+(a+b)+(" ")+(a*b*c*d))
}

setInterval(Mul,2000,1,2,3,10)
//(name,delay,a,b)