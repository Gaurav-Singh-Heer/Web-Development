class Employee{
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

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`)
    }
    requestLeaves(leaves){ 
        super.requestLeaves()    // BY THIS requestLeaves of parent Class will run  
        //                   // Also BY THIS WE CAN USE EMPLOYEE CLASS METHOD IN PROGRAMMER CLASS      
        super.requestLeaves(400) 
        console.log(`(One Extra!! Enjoy:)`)  // No extra is given in output by super 
        console.log(`Employee has requesed ${leaves+1} leaves (One Extra!! Enjoy:)`)
    }
}

let e= new Programmer()
e.login()
e.requestLeaves(3)