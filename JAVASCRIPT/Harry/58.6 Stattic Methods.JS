//     OR
class Animal{
    constructor(name){
        this.name=Animal.capitalize(name)
    }
    walk(){
        console.log("Animal "+ this.name +" is Walking")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}
// j=new Animal("Oggy")
// j.walk()

// OR

// j=new Animal(Animal.capitalize("Oggy"))
// j.walk()

// OR

j=new Animal("Oggy")
j.walk()