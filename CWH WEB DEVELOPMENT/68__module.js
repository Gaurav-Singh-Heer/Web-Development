function average(arr){
    sum=0;
    arr.forEach(element=>{
        sum+=element;
    });
    return sum/arr.length;
}

module.exports=average;          // To access this function from other file