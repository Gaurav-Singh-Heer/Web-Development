let arr2=[1,2,3,5,2,1]
let newarr2=arr2.reduce((h1, h2)=>{
    return h1+h2
})
console.log(newarr2)



let arr3=[1,2,3,5,2,1];
const reduce_func=(h1,h2)=>{
    return h1+h2;
};
let newarr3=arr3.reduce(reduce_func)
console.log(newarr3)

// OUTPUT:   
// 45 0 [45, 23, 21]
// 23 1 [45, 23, 21]
// 21 2 [45, 23, 21]
// [ 45, 24, 23]