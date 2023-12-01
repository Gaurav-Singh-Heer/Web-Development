let numbers=[1,2,3,4,5];
let doubleNumbers=numbers.map((i)=>{
    return i*2;
});
console.log(doubleNumbers)



console.log ("Chalo Chalo Aage Padho")

let arr=[45,23,21]

let a=arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value+index
})
console.log(a)