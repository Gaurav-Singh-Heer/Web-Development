console.log("Hello World");                                  //1
console.error("This is an error");                           //2
console.warn("This is a warning");                           //3

let x=5                                                      //4
console.assert(x==5,"Error: x is not equal to 5");// As true so NO OUTPUT
console.assert(x==6,"Error: x is not equal to 6");

let students=[                                               //5
    {name:"coco",age:20,city:"New York"},
    {name:"wld",age:21,city:"London"},
    {name:"ryn",age:22,city:"Chicago"}
];
console.table(students);                                      //6

console.time("Time taken");
let a=5;
let b=6;
let c=a+b;
console.timeEnd("Time taken");