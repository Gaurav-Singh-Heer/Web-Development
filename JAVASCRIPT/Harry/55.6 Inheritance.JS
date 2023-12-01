class Animal{                               // Parent Class
    constructor(name,color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name+" is running")
    }
    shout(){
        console.log(this.name+" is barking")
    }
}

class Monkey extends Animal{            //Child Class
    eatBanana(){
        console.log(this.name+" is eating Banana")
    }
}


let ani=new Animal("Bruno","White")
let m=new Monkey("Chimpu","Orange")

ani.shout()
m.eatBanana()