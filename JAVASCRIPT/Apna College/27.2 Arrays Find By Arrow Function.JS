// Using Find in Reference Datatype
//We can also use it in Primitive Datatype 
let channels=[{
    name:'Apna College',
    subscribers:10000
},{
    name:'Code with Harry',
    subscribers:20000
},{
    name:'Gate Smasher',
    subscribers:5000
}];
//By Inline Function
console.log (channels.find(function(element){
    return element.name==='Apna College'                 // Checking if name = 'Apna College'
})) 
console.log (channels.find(function(element){
    return element.name==='Apna Zyka'                    // Checking if name = 'Apna Zyka'
})) 

//By Arrow Function
console.log (channels.find((element)=> {
    return element.name==='Apna College'                 // Checking if name = 'Apna College'
})) 
console.log (channels.find((element)=> {
    return element.name==='Apna Zyka'                    // Checking if name = 'Apna Zyka'
})) 

//By Arrow Function ONE LINE
console.log (channels.find((element)=>element.name==='Apna College')) // Checking if name = 'Apna College'
console.log (channels.find((element)=>element.name==='Apna Zyka'))    // Checking if name = 'Apna Zyka'
