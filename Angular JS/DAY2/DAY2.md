# Angular Project: Hotel Reservation System

We are building a **Hotel Reservation System** using Angular.  
This application will perform **CRUD operations (Create, Read, Update, Delete)** for hotel reservations.

---

# 1. Create Angular Application

Run the following command to create a new Angular project:

```bash
ng new hotel-app
````

Navigate into the project directory:

```bash
cd hotel-app
```

---

# 2. Configure Root Component

Open the file:

```
src/app/app.component.html
```

Remove all default content and keep only:

```html
<router-outlet></router-outlet>
```

### Purpose

`router-outlet` is used by Angular Router to display components based on the current route.

---

# 3. Application Architecture

```
App Root
   │
   └── Router
         │
         ├── Home Component
         │
         └── Reservation Module
               │
               ├── Reservation List Component
               ├── Reservation Form Component
               │
               └── Reservation Service
```

### Component Responsibilities

| Component             | Purpose                           |
| --------------------- | --------------------------------- |
| Home Component        | Landing page of the application   |
| Reservation List      | Display all reservations          |
| Reservation Form      | Create / Update reservation       |
| Reservation Service   | Handle business logic and data    |
| Reservation Interface | Define reservation data structure |

---

# 4. Generate Modules, Components, Services, and Interface

Run the following Angular CLI commands:

### Create Home Module

```bash
ng generate module home
```

Create Home Component inside the module:

```bash
ng generate component home --module=home
```

---

### Create Reservation Module

```bash
ng generate module reservation
```

Create Reservation Form Component:

```bash
ng generate component reservation-form --module=reservation
```

Create Reservation List Component:

```bash
ng generate component reservation-list --module=reservation
```

---

### Create Reservation Service

```bash
ng generate service reservation/reservation
```

This creates:

```
src/app/reservation/reservation.service.ts
```

The service will contain the **business logic for reservations**.

---

### Create Reservation Interface

```bash
ng generate interface models/reservation
```

This creates:

```
src/app/models/reservation.ts
```

---

# 5. Reservation Interface

File:

```
src/app/models/reservation.ts
```

Define the reservation data model:

```ts
export interface Reservation {
    id: string,
    checkInDate: Date,
    checkOutDate: Date,
    guestName: string,
    guestEmail: string,
    roomNumber: number
}
```

---

# Reservation Object Example

```ts
const reservation: Reservation = {
    id: "1",
    checkInDate: new Date("2024-05-01"),
    checkOutDate: new Date("2024-05-05"),
    guestName: "John Doe",
    guestEmail: "john@example.com",
    roomNumber: 101
};
```

---

# 6. Folder Structure

```
src
 └── app
      │
      ├── home
      │     ├── home.component.ts
      │     ├── home.component.html
      │
      ├── reservation
      │     ├── reservation-form
      │     ├── reservation-list
      │     └── reservation.service.ts
      │
      ├── models
      │     └── reservation.ts
      │
      └── app.component.html
```

---

# Key Angular Concepts Used

| Concept       | Description                    |
| ------------- | ------------------------------ |
| Modules       | Organize application features  |
| Components    | Build UI elements              |
| Services      | Handle business logic and data |
| Interfaces    | Define TypeScript data models  |
| Router        | Navigate between views         |
| router-outlet | Dynamic component rendering    |
---

```
```
# Creating Routes in Angular (Angular Routing)

Angular routing allows navigation between different components using URL paths.

Routing configuration is defined in:

```

src/app/app-routing.module.ts

```

---

# 1. Initial Routes Configuration

By default, the routing file contains:

```ts
const routes: Routes = [];
````

This means **no routes are configured yet**.

---

# 2. Configure Home Route

Update the routes array to load the **HomeComponent** when the root path is accessed.

```ts
const routes: Routes = [
  { path: "", component: HomeComponent }
];
```

### Result

When visiting:

```
http://localhost:4200/
```

Angular will display:

```
home works!
```

This happens because **HomeComponent is mapped to the root path (`""`)**.

---

# 3. Add More Routes

Now we add routes for **Reservation List** and **Reservation Form** components.

Update the routes array:

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "list", component: ReservationListComponent },
  { path: "new", component: ReservationFormComponent }
];
```

---

# 4. Route Explanation

| Path    | Component                | Purpose                      |
| ------- | ------------------------ | ---------------------------- |
| `/`     | HomeComponent            | Displays home page           |
| `/list` | ReservationListComponent | Shows list of reservations   |
| `/new`  | ReservationFormComponent | Form to create a reservation |

---

# Example URLs

| URL                          | Displays         |
| ---------------------------- | ---------------- |
| `http://localhost:4200/`     | Home Component   |
| `http://localhost:4200/list` | Reservation List |
| `http://localhost:4200/new`  | Reservation Form |

---

# How Angular Routing Works

```
User visits URL
      ↓
Angular Router checks routes[]
      ↓
Matching path found
      ↓
Component is loaded inside <router-outlet>
```

Example:

```html
<router-outlet></router-outlet>
```

The router dynamically renders the component inside this outlet.

---

# Updated Routing File Example

File: `app-routing.module.ts`

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation/reservation-form/reservation-form.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "list", component: ReservationListComponent },
  { path: "new", component: ReservationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

---

# Summary

| Concept           | Description                                |
| ----------------- | ------------------------------------------ |
| Routing           | Navigation between components              |
| `Routes`          | Array defining URL paths                   |
| `path`            | URL route                                  |
| `component`       | Component displayed for that route         |
| `<router-outlet>` | Placeholder where routed components render |

---

```
```


# Building a simple navigation

So at `home/home.component.html`
```
<div>
    <h2>Welcome to the Hotel Reservation Portal</h2>
    <button>Create a new Reservation</button>
    <button>View all new Reservation</button>
</div>
```

```
    <button[routerLink]>Create a new Reservation</button>
```
>routerLink can't be used now as we haven't imported the product module yet.

Also if we want to use the router Moudule we have to import it to our home module which is basically `home.module.ts`.

```ts
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
```

Now update `home.component.html` basically will be adding routerLink over there.

```
    <button [routerLink]="['/new']">Create a new Reservation</button>
    <button [routerLink]="['/list']">View all new Reservation</button>
```

will get comilation error over here

Now at `app.module.ts` add
```ts
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
```

```ts
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule
  ],

```

now compilation would be successful

Here are your notes **cleaned, structured, and properly formatted in Markdown (.md)**.

````md
# Building a Simple Navigation in Angular

Now we will create a **basic navigation UI** to move between different routes in our Hotel Reservation App.

---

# 1. Create Navigation UI

File: `home/home.component.html`

```html
<div>
    <h2>Welcome to the Hotel Reservation Portal</h2>
    <button>Create a new Reservation</button>
    <button>View all new Reservation</button>
</div>
````

At this stage, the buttons are **static** and not connected to routing.

---

# 2. Add Routing to Buttons

We use Angular’s **`routerLink` directive** to navigate between routes.

Update the HTML:

```html
<button [routerLink]="['/new']">Create a new Reservation</button>
<button [routerLink]="['/list']">View all Reservations</button>
```

---

# 3. Issue: routerLink Not Working

You may get an error like:

```text
Can't bind to 'routerLink' since it isn't a known property
```

### Reason

Because **RouterModule is not imported** in the module where the component is declared.

---

# 4. Import RouterModule in Home Module

File: `home/home.module.ts`

```ts
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
```

Now `routerLink` will work inside `HomeComponent`.

---

# 5. Import Feature Modules in App Module

To ensure everything works correctly, import the modules in the root module.

File: `app.module.ts`

```ts
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
```

Update imports:

```ts
imports: [
  BrowserModule,
  AppRoutingModule,
  HomeModule,
  ReservationModule
]
```

---

# 6. Final Navigation Code

File: `home/home.component.html`

```html
<div>
    <h2>Welcome to the Hotel Reservation Portal</h2>

    <button [routerLink]="['/new']">
        Create a new Reservation
    </button>

    <button [routerLink]="['/list']">
        View all Reservations
    </button>
</div>
```

---

# How Navigation Works

```text
User clicks button
        ↓
routerLink triggers route change
        ↓
Angular Router matches path
        ↓
Component loads inside <router-outlet>
```

---

# Example Navigation

| Button             | Route   | Component                |
| ------------------ | ------- | ------------------------ |
| Create Reservation | `/new`  | ReservationFormComponent |
| View Reservations  | `/list` | ReservationListComponent |

---

# Key Concepts

| Concept           | Description                    |
| ----------------- | ------------------------------ |
| `routerLink`      | Directive for navigation       |
| `RouterModule`    | Enables routing features       |
| Feature Modules   | Organize application structure |
| `<router-outlet>` | Renders routed components      |

---

# Final Result

* Buttons now **navigate between pages**
* No page reload (SPA behavior)
* Clean and modular routing setup

---

```
```

# Creating a Form Group in Angular (Reactive Forms)

Angular provides two main ways to handle forms:

## Types of Form Validation

| Type | Description |
|------|------|
| Reactive Forms | Form logic and validation handled in TypeScript |
| Template-Driven Forms | Form logic handled in HTML template |

---

# 1. Setup Form in HTML

File: `reservation-form.component.html`

```html
<form [formGroup]="reservationForm">
    
</form>
```

### Explanation

* `[formGroup]` binds the form in HTML to a **FormGroup object in TypeScript**
* This is part of **Reactive Forms**

---

# 2. Import Required Modules

File: `reservation.module.ts`

```ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
```

Update imports:

```ts
imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
]
```

### Why?

| Module              | Purpose                                     |
| ------------------- | ------------------------------------------- |
| FormsModule         | For template-driven forms                   |
| ReactiveFormsModule | For reactive forms (FormGroup, FormControl) |

---

# 3. Import Form Classes

File: `reservation-form.component.ts`

```ts
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
```

⚠️ Correction:

* Use `Validators` (not `Validator`)

---

# 4. Create FormGroup in Component

```ts
export class ReservationFormComponent {

  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      guestName: [''],
      guestEmail: [''],
      checkInDate: [''],
      checkOutDate: [''],
      roomNumber: ['']
    });
  }

}
```

---

# 5. How Reactive Form Works

```text
Form (HTML)
     ↓
[formGroup] binding
     ↓
FormGroup (TypeScript)
     ↓
Form Controls (fields)
```

---

# Example Form Structure

```ts
this.reservationForm = this.fb.group({
  guestName: [''],
  guestEmail: [''],
  checkInDate: [''],
  checkOutDate: [''],
  roomNumber: ['']
});
```

Each field becomes a **FormControl** inside the FormGroup.

---

# 6. Add Form Controls in HTML

```html
<form [formGroup]="reservationForm">

  <input formControlName="guestName" placeholder="Guest Name">

  <input formControlName="guestEmail" placeholder="Guest Email">

  <input type="date" formControlName="checkInDate">

  <input type="date" formControlName="checkOutDate">

  <input type="number" formControlName="roomNumber">

  <button type="submit">Submit</button>

</form>
```

---

# Key Concepts

| Concept         | Description                   |
| --------------- | ----------------------------- |
| FormGroup       | Group of form controls        |
| FormControl     | Individual input field        |
| FormBuilder     | Helper to create forms easily |
| Validators      | Used for validation rules     |
| formControlName | Connects input to FormControl |

---

# Summary

* Reactive Forms are **controlled in TypeScript**
* HTML binds using `[formGroup]` and `formControlName`
* `ReactiveFormsModule` must be imported
* FormBuilder simplifies form creation

---



```
```
# Reservation Form & CRUD Service in Angular

This section covers:
- Creating a form using Reactive Forms
- Validating the form
- Displaying validation messages
- Creating a Reservation Service with CRUD operations

---

# 1. Creating the Reservation Form

## Step 1: Add Form in HTML

File: `reservation-form.component.html`

```html
<form [formGroup]="reservationForm" (ngSubmit)="onSubmit()">
</form>
```

### Explanation

| Attribute     | Purpose                     |
| ------------- | --------------------------- |
| `[formGroup]` | Binds form to FormGroup     |
| `(ngSubmit)`  | Calls method on form submit |

---

## Step 2: Add Submit Method

File: `reservation-form.component.ts`

```ts
onSubmit() {

}
```

---

## Step 3: Add Form Fields

```html
<form [formGroup]="reservationForm" (ngSubmit)="onSubmit()">

    <div>
        <label>Check-In Date:</label>
        <input type="date" formControlName="checkInDate">
    </div>

    <div>
        <label>Check-Out Date:</label>
        <input type="date" formControlName="checkOutDate">
    </div>

    <div>
        <label>Guest Name:</label>
        <input type="text" formControlName="guestName">
    </div>

    <div>
        <label>Guest Email:</label>
        <input type="email" formControlName="guestEmail">
    </div>

    <div>
        <label>Room Number:</label>
        <input type="number" formControlName="roomNumber">
    </div>

    <button type="submit">SUBMIT</button>

</form>
```

---

# 2. Reactive Form Validation

File: `reservation-form.component.ts`

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log("Form is VALID");
      console.log(this.reservationForm.value);
    } else {
      console.log("Form is INVALID");
    }
  }
}
```

---

# 3. Disable Submit Button if Form is Invalid

```html
<button type="submit" [disabled]="reservationForm.invalid">
    SUBMIT
</button>
```

---

# 4. Show Validation Messages using `*ngIf`

File: `reservation-form.component.html`

```html
<form [formGroup]="reservationForm" (ngSubmit)="onSubmit()">

    <!-- Check-In Date -->
    <div>
        <label>Check-In Date:</label>
        <input type="date" formControlName="checkInDate">

        <div *ngIf="reservationForm.get('checkInDate')?.invalid && reservationForm.get('checkInDate')?.touched">
            Check-In Date is required
        </div>
    </div>

    <!-- Check-Out Date -->
    <div>
        <label>Check-Out Date:</label>
        <input type="date" formControlName="checkOutDate">

        <div *ngIf="reservationForm.get('checkOutDate')?.invalid && reservationForm.get('checkOutDate')?.touched">
            Check-Out Date is required
        </div>
    </div>

    <!-- Guest Name -->
    <div>
        <label>Guest Name:</label>
        <input type="text" formControlName="guestName">

        <div *ngIf="reservationForm.get('guestName')?.invalid && reservationForm.get('guestName')?.touched">
            Guest Name is required
        </div>
    </div>

    <!-- Guest Email -->
    <div>
        <label>Guest Email:</label>
        <input type="email" formControlName="guestEmail">

        <div *ngIf="reservationForm.get('guestEmail')?.invalid && reservationForm.get('guestEmail')?.touched">
            Guest Email is required
        </div>
    </div>

    <!-- Room Number -->
    <div>
        <label>Room Number:</label>
        <input type="number" formControlName="roomNumber">

        <div *ngIf="reservationForm.get('roomNumber')?.invalid && reservationForm.get('roomNumber')?.touched">
            Room Number is required
        </div>
    </div>

    <!-- Submit -->
    <button type="submit" [disabled]="reservationForm.invalid">
        SUBMIT
    </button>

</form>
```

---

# 5. Creating Reservation Service (CRUD Operations)

File: `reservation.service.ts`

```ts
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  // Get all reservations
  getReservations(): Reservation[] {
    return this.reservations;
  }

  // Get reservation by ID
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  // Add new reservation
  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  // Delete reservation
  deleteReservation(id: string): void {
    const index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      this.reservations.splice(index, 1);
    }
  }

  // Update reservation
  updateReservation(updatedReservation: Reservation): void {
    const index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    if (index !== -1) {
      this.reservations[index] = updatedReservation;
    }
  }
}
```

>`@Injectable` makes a class available for Dependency Injection (DI).
---

# Key Concepts

| Concept        | Description                  |
| -------------- | ---------------------------- |
| Reactive Forms | Form handled in TypeScript   |
| FormGroup      | Group of form controls       |
| Validators     | Used for validation          |
| ngSubmit       | Handles form submission      |
| *ngIf          | Conditional rendering        |
| Service        | Handles business logic       |
| CRUD           | Create, Read, Update, Delete |

---

# Flow of Application

```text
User fills form
      ↓
Validation applied
      ↓
Submit clicked
      ↓
onSubmit() executed
      ↓
Data sent to ReservationService
      ↓
Stored / Updated / Deleted
```

---

```
```

# Injecting the reservation service into the form component

As `reservation.service.ts` is Injectable

At `reservation-form.component.ts` will import,
```ts
import { ReservationService } from '../reservation/reservation.service';
```

Also will add this at export class constructor.
```ts
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService){
  }
```

Will also update onSubmit() function so that form gets stored in the Array.
```ts
  onSubmit() {
    if (this.reservationForm.valid) {
      console.log("Form is VALID");
      console.log(this.reservationForm.value);
      let reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);
    } else {
      console.log("Form is INVALID");
    }
  }
```

# Setting up the LocalStorage to store the reservation-Form data

At File:- `reservation.service.ts`

ADD
```ts
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
```

in add, update, delete this is for setItem

```ts
  addReservation(reservation:Reservation):void{
    this.reservations.push(reservation);
    console.log(this.reservations);

    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
  
  deleteReservation(id:string):void{
    let index = this.reservations.findIndex(res=>res.id===id);
    this.reservations.splice(index,1);

    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
  
  updateReservation(updateReservation: Reservation):void{
    let index = this.reservations.findIndex(res => res.id === updateReservation.id);
    this.reservations[index]=updateReservation;
   
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
```

Now, for getItem

```ts
  constructor(){
    let savedReservations=localStorage.getItem("reservations");
    this.reservations=savedReservations? JSON.parse(savedReservations) : [];
  }
```

# Showing all reservations in a list

On `reservation-list.component.ts`
import OnInit, ReservationService, Reservation
```ts
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit{

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService){

  }

  ngOnInit(): void {
    this.reservations=this.reservationService.getReservations();
  }

}
```

So, here we got the Oninit LifeCycle Hook, we have the property reservations which we will use for data-binding
we created the constructor to keep the instance of our service
and on the LifeCycle hook ngOnInit we simply load all reservations and then load them in our property.

Now, Moving on to `reservation-list.component.html` will display whole local data using ngFor
```
<p>reservation-list works!</p>

<h2>Reservation List</h2>

<ul>
    <li *ngFor="let reservation of reservations">
        Guest: {{reservation.guestName}} <br>
        Email: {{reservation.guestEmail}} <br>
        Room No.: {{reservation.roomNumber}} <br>
        Check-In: {{reservation.checkInDate}} <br>
        Check-Out: {{reservation.checkOutDate}} <br>
    </li>
</ul>
```

# ngtemplate and local reference

At File:- `reservation-list.component.html`

```html
<p>reservation-list works!</p>

<h2>Reservation List</h2>

<ul *ngIf="reservations.length; else noReservation">
    <li *ngFor="let reservation of reservations">
        Guest: {{reservation.guestName}} <br>
        Email: {{reservation.guestEmail}} <br>
        Room No.: {{reservation.roomNumber}} <br>
        Check-In: {{reservation.checkInDate}} <br>
        Check-Out: {{reservation.checkOutDate}} <br>
    </li>
</ul>

<ng-template #noReservation>          
    <p>No reservation available.</p>
</ng-template>

<!-- #noReservation is the name. given to this ng-template and this will be activated using ngIf condition -->
<!-- At ul we will give ngIf show list if reservation.length>=1 else show noReservation template -->
```

# On submitting form redirect to view-list

At `reservation-form.components.ts`

At constructor add router
```ts
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router:Router){
  }
```

also onSubmit navigate router

```ts
  onSubmit() {
    if (this.reservationForm.valid) {
      console.log("Form is VALID");
      console.log(this.reservationForm.value);
      let reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);

      this.router.navigate(['/list'])
    } else {
      console.log("Form is INVALID");
    }
  }
```

Now if we fill form and submit we wil automatically get redirected to Reservation List view tab.

# Deleting reservations

At File:- `reservation-list.component.ts` 

> Add delete function (delete reservation by ID)
```ts
  deleteReservation(id:string){
    this.reservationService.deleteReservation(id);
  }
```  
At File:- `reservation-list.component.html` willl add a delete button over there after each view column

```
        <button (click)="deleteReservation(reservation.id)">Delete</button>
```

# Creating unique ids for reservations

At File:- `reservation.service.ts` 

in addReservation fuction add reservation.id as current time.
```ts
  addReservation(reservation:Reservation):void{

    reservation.id = Date.now().toString();

    this.reservations.push(reservation);
    console.log(this.reservations);

    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
```

# Adding the edit route with parameter

At File:- `app-touting.module.ts`

in routes add path:edit/:id

```ts
const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"list", component: ReservationListComponent},
  {path:"new", component: ReservationFormComponent},
  {path:"edit/:id", component: ReservationFormComponent}
];
```

At File:- `reservation-list.component.html` add an Edit button
```html
        <button [routerLink]="['/edit', reservation.id]">Edit</button>
```

it will give error as we haven't added router module yet.

So, At File:- `reservation.module.ts`

import Router module
```ts
import { RouterModule } from '@angular/router';
```

Also add this in imports

```ts
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ]
``` 

Hence Now we can edit user from the view list

# On click on Edit prefill the form by old values 

At File:- `Reservation-form.component.ts`

Here import ActivatedRoute

```ts
import { Router, ActivatedRoute } from '@angular/router';
```

Also update constructor

```ts
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router:Router,
    private activatedRoute: ActivatedRoute){
  }
```

Then update ngOnInit

```ts
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
```

Now update onSubmit()
```ts
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
```
