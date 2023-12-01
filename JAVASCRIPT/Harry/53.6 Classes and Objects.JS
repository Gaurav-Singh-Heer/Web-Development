class RailwayForm{
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

let harryForm = new RailwayForm()
harryForm.fill("Harry",120011)

let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()
rohanForm1.fill("Rohan",222222)
rohanForm2.fill("Rohan",222420)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()