const names=['Daman','Harsh','Vansh','Daman','Harsh','Gaurav']
console.log(names)

// names.includes('Gaurav')
console.log(names.includes('Gaurav'))               // true if includes
// names.includes('Saurav')
console.log(names.includes('Saurav'))               //false if not includes

let channels=[{
    name:'Apna College',
    subscriber:10000
},{
    name:'Code with Harry',
    subscriber:20000
},{
    name:'Gate Smasher',
    subscriber:5000
}];

console.log (channels.includes({     // false as includes work only for primitive datatypes not for reference datatypes
    name:'Apna College',
    subscriber:10000
}))