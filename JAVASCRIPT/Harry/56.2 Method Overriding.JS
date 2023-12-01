class Employee{
    login(){
        console.log("Employee has logged in")
    }

    logout(){
        console.log("Employee has logged out")
    }

    requestLeaves(leaves){
        console.log(`Employee has requesed ${leaves} leaves`)
    }

}

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`)
    }
}

let e= new Employee()
e.login()
e.requestLeaves(3)