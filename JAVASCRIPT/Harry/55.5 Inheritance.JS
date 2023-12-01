class Animal{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name+" is running")
    }
    shout(){
        console.log(this.name+" is shouting")
    }
    run(){
        console.log(this.name+" is running")
    }
}

// THIS WE SHOULD NOT DO 
// WE WILL DO THIS IF WE ARE NOT A GOOD CODER
class Monkey{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name+" is running")
    }
    shout(){
        console.log(this.name+" is shouting")
    }
    eatBanana(){
        console.log(this.name+" is eating banana")
    }
}


let ani=new Animal("Bruno","White")
let m=new Monkey("Chimpu","Orange")

ani.shout()
m.eatBanana()