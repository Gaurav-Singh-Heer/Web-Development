class RailwayForm{
    constructor(){                  // It is called when we make object of any class
        console.log("Constructor Called....")
    }
    submit(){
        alert(this.name+"'s form is Submitted for Train-> "+this.Train)
    }
    cancel(){
        alert(this.name+"'s form is Cancelled for Train->"+this.Train )
    }
    fill(givenname,TrainNumber){
        this.name=givenname
        this.Train=TrainNumber      // Can also Give Both Name Same as   ->    this.TrainNumber=TrainNumber
    }
}

let harryForm = new RailwayForm()                          //1st Construct called because of "new"
// harryForm.fill("Harry",120011)

let rohanForm1 = new RailwayForm()                         //2nd Construct called because of "new"
let rohanForm2 = new RailwayForm()                         //3rd Construct called because of "new"
// rohanForm1.fill("Rohan",222222)
// rohanForm2.fill("Rohan",222420)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()