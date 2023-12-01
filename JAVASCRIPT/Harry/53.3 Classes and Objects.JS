class RailwayForm{
    submit(){
        alert("form Submitted")
    }
    cancel(){
        alert("This Form is Cancelled")
    }
}

let harry = new RailwayForm()
let rohan = new RailwayForm()

harry.submit()
rohan.submit()
rohan.cancel()