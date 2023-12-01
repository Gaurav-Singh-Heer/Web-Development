class Employee{
    constructor(name){
        console.log(`${name} Employee's Contructor is here`)
        this.name=name
    }
    login(){
        console.log("Employee has logged in")
    }

    logout(){
        console.log("Employee has logged out")
    }

    requestLeaves(leaves){
        console.log(`Employee has requesed ${leaves} leaves-Auto Approved`)
    }

}
// When we not put constructor in programmer class then automatically one constructor is added 
// by JavaScript Engine
class Programmer extends Employee{
    // constructor(..args){       ->If there is no constructor in the child class then 
    //     super(..args)            this is created automatically                         
    // }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`)
    }
    requestLeaves(leaves){ 
        super.requestLeaves()
        super.requestLeaves(400) 
        console.log(`(One Extra!! Enjoy:)`)  
        console.log(`Employee has requesed ${leaves+1} leaves (One Extra!! Enjoy:)`)
    }
}

let e= new Programmer("Harry")
e.login()
e.requestLeaves(3)