let arr=[3,5,8,9,12,11,13,20,40,100]
let [a,b,c,d, ...rest]=arr              // only 3     .      not more than that
//No need to do this:
//let a = arr[0]
//let b = arr[1]
console.log(a, b, c, d, rest)