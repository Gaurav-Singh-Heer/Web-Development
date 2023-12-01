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
let rohan = new RailwayForm()
rohan.fill("Rohan",222222)

harryForm.submit()
rohan.submit()
rohan.cancel()