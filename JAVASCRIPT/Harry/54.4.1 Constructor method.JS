class RailwayForm{
    constructor(givenname,TrainNumber){
        console.log("Constructor Called....")
        this.name=givenname
        this.Train=TrainNumber      // Can also Give Both Name Same as   ->    this.TrainNumber=TrainNumber
    }
    submit(){
        alert(this.name+"'s form is Submitted for Train-> "+this.Train)
    }
    cancel(){
        alert(this.name+"'s form is Cancelled for Train->"+this.Train )
    }
}

let harryForm = new RailwayForm()                          //1st Construct called because of "new"
// harryForm.fill("Harry",120011)     //NO NEED TO FILL FORM SEPARATELY NOW

let rohanForm1 = new RailwayForm()                         //2nd Construct called because of "new"
let rohanForm2 = new RailwayForm()                         //3rd Construct called because of "new"
// rohanForm1.fill("Rohan",222222)
// rohanForm2.fill("Rohan",222420)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()