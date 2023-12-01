let names1=['Daman','Suhani','Ankush','Daman','Suhani','Gaurav']
let names2=['Agam','Aryan','Bilakshan','Akshit','Vansh','Harsh']

//For Loop
for (i=0;i<names1.length;i++){
    console.log(names1[i])
}

console.log('Chal Htt BSDK')

//For of
for(let name of names1){
    console.log(name)
}

console.log('Chal Htt BSDK')

//For-each
names1.forEach(function(name,index){
    console.log(name)
})

console.log('Chal Htt BSDK')

//For-each
names1.forEach(function(name,index){
    console.log(name,index)
})