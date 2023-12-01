class Animal{
    constructor(name){
        this.name=name
    }
    walk(){
        console.log("Animal "+this.name+" is Walking")
    }
}
j=new Animal("Oggy")
j.walk()