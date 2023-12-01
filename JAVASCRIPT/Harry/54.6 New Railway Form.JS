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
