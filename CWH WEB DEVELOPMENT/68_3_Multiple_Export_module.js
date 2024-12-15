function average(arr){
    sum=0;
    arr.forEach(element=>{
        sum+=element;
    });
    return sum/arr.length;
}

// module.exports={
//     avg: average,          // To access this function from other file
//     name:"Harry",
//     repo: "GitHub"
// };

module.exports.name="Harry Singh Heer"
// module.exports.name="Gaurav Singh Heer"