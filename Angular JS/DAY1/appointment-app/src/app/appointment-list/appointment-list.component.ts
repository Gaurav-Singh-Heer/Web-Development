import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  appointment_1: string = "Take dog for a walk";

  appointment_2: Appointment = {
    id: 1,
    title: "Take cat for walk",
    date: new Date('2023-07-30')
  };

  newAppointmenTitle : string = "";
  newAppointmenDate : Date = new Date();
  appointments: Appointment[] = []

  // ngOnInit(): void {
  //   console.log("got loaded")
  // }
  ngOnInit(): void {
    let savedAppointments=localStorage.getItem("appointments")
    this.appointments=savedAppointments ? JSON.parse(savedAppointments) : []
  }

  addAppointment(){
    // alert(this.newAppointmenTitle+" "+this.newAppointmenDate)
    if(this.newAppointmenTitle.trim().length && this.newAppointmenDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmenTitle,
        date: this.newAppointmenDate
      }

      this.appointments.push(newAppointment);

      // Once user pushed empty the title and clear the Date
      this.newAppointmenTitle="";
      this.newAppointmenDate=new Date();
      // Now if we click Add then after if we will get form empty and values will be pushed in the array.

      alert(this.appointments.length); // This is just to ensure that something is pushed in array or not.

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments)) 
  }
}