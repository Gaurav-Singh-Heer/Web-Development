class RailwayForm{
    constructor(givenname,TrainNumber,address){
        console.log("Constructor Called...."+givenname+" "+TrainNumber)
        this.name=givenname
        this.Train=TrainNumber      // Can also Give Both Name Same as   ->    this.TrainNumber=TrainNumber
        this.address=address    
    }
    submit(){
        alert(this.name+"'s form is Submitted for Train-> "+this.Train)
    }
    cancel(){
        alert(this.name+"'s form is Cancelled for Train->"+this.Train )
    }
}

let HarryForm=new RailwayForm("Harry",13488,"420,Pacific Ocean,Ocean,Bihar,Pin-140301")