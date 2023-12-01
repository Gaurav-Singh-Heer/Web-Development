class Animal{
    constructor(name){
        this.name=name
    }
    walk(){
        console.log("Animal "+Animal.capitalize(this.name)+" is Walking")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}
j=new Animal("Oggy")
j.walk()