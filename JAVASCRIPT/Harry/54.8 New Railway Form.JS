class RailwayForm{
    constructor(givenname,TrainNumber,address){
        console.log("Constructor Called...."+givenname+" "+TrainNumber)
        this.name=givenname
        this.Train=TrainNumber      // Can also Give Both Name Same as   ->    this.TrainNumber=TrainNumber
        this.address=address    
    }
    preview(){
        alert(this.name+":Your form is for Train-> "+this.Train +" and your address is "+this.address)
    }
    submit(){
        alert(this.name+"'s form is Submitted for Train-> "+this.Train)
    }
    cancel(){
        alert(this.name+"'s form is Cancelled for Train->"+this.Train )
        this.Train=0     //TrainNumber will be 0 as no train allocated after CANCEL 
    }
}

let HarryForm=new RailwayForm("Harry",13488,"420,Pacific Ocean,Ocean,Bihar,Pin-140301")
HarryForm.preview()