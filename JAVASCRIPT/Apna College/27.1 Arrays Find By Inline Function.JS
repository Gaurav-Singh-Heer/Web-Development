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

console.log (channels.find(function(element){
    return element.subscribers===5000                    // Checking if subscribers = 5000
}))                                                      
console.log (channels.find(function(element){
    return element.subscribers===5500                    // Checking if subscribers = 5500
}))                                                      
console.log (channels.find(function(element){
    return element.name==='Apna College'                 // Checking if name = 'Apna College'
})) 
console.log (channels.find(function(element){
    return element.name==='Apna Zyka'                    // Checking if name = 'Apna Zyka'
})) 