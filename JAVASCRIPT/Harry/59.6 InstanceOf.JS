class Animal{
    constructor(name){
        this._name=name                                     // OR   this.name=name
    }
    fly(){
        alert("Mein ud Raha hun")
        console.log("Mein ud Raha hun")
    }
    get name(){
        return this._name                 // can't use name directly as we made it getter so used _name
    }
    set name(newName){
        this._name=newName
    }
}
class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating Carrot")
    }
}
let a= new Rabbit("Oggy")                      //Changed Animal To Rabbit
a.fly()
console.log(a.name)
a.name="Jack"
console.log(a.name)

let c=56

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)