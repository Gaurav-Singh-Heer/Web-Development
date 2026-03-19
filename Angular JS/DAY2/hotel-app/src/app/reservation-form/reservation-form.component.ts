import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router:Router,
    private activatedRoute: ActivatedRoute){
  }

  // ngOnInit(): void {
  //   if(this.reservationForm.valid){
  //     console.log("valid");
  //   }  
  // }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate:['', Validators.required],
      checkOutDate:['', Validators.required],
      guestName:['', Validators.required],
      guestEmail:['', [Validators.required, Validators.email]], // For multiple validator we use array
      roomNumber:['', Validators.required]
    })
    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      let reservation = this.reservationService.getReservation(id)

      if(reservation){
        this.reservationForm.patchValue(reservation)
      }
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log("Form is VALID");
      console.log(this.reservationForm.value);
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if(id){
        // Update
        reservation.id = id;

        this.reservationService.updateReservation(reservation);
      } else {
        // New
        this.reservationService.addReservation(reservation);
      }

      this.router.navigate(['/list'])
    } else {
      console.log("Form is INVALID");
    }
  }
}
