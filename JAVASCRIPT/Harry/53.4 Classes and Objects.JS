class RailwayForm{
    submit(){
        alert(this.name+"'s form is Submitted")
    }
    cancel(){
        alert(this.name+"'s form is Cancelled")
    }
    fill(givenname){
        this.name=givenname
    }
}

let harryForm = new RailwayForm()
harryForm.fill("Harry")
let rohan = new RailwayForm()
rohan.fill("Rohan")

harryForm.submit()
rohan.submit()
rohan.cancel()