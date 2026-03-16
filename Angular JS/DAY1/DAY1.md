# Angular CLI Notes

## Basic Angular CLI Commands

### 1. Create a New Angular Application

```bash
ng new <application-name>
````

Example:

```bash
ng new appointment-app
```

This command:

* Creates a new Angular project
* Generates the project folder structure
* Installs required dependencies

---

### 2. Start Angular Application

```bash
ng serve
```

This command:

* Compiles the Angular project
* Starts the development server

Application runs at:

```
http://localhost:4200
```

To automatically open the browser:

```bash
ng serve -o
```

---

## Angular CLI Command Reference

| Command                      | Purpose                            |
| ---------------------------- | ---------------------------------- |
| `ng new app-name`            | Create new Angular project         |
| `ng serve`                   | Run Angular application            |
| `ng serve -o`                | Run and open browser automatically |
| `ng generate component name` | Create a new component             |
| `ng build`                   | Build production-ready files       |

---

# Angular Data Binding

Angular provides different ways to bind data between the **component (logic)** and **UI (template)**.

## One-Way Data Binding

In **one-way binding**, data flows in **one direction** from the **component to the UI**.

Example:

```html
<h1>{{ title }}</h1>
```

If the **variable value changes in the component**, the **UI updates automatically**.

It is somewhat similar to **state updates in React**, where changing a variable updates the UI.

---

## Two-Way Data Binding

In **two-way binding**, data flows **both ways**:

* Component → UI
* UI → Component

Example:

```html
<input [(ngModel)]="username">
```

If the **user changes the value in the UI**, it updates the **component variable**.
If the **component variable changes**, the **UI updates automatically**.

This keeps the **UI and data synchronized**.

---

> # Is binding same as hooks?
No, **binding in Angular is not the same as hooks in React**. They solve different problems, although both affect how UI updates. Let’s clarify it simply.

---

# Angular Binding vs React Hooks

## 1️⃣ Angular Binding

**Binding** is about **connecting data between the component and the HTML template**.

It controls **how data flows between logic and UI**.

Example (Angular):

```html
<h1>{{ title }}</h1>
<input [(ngModel)]="name">
```

Types of binding:

| Binding Type            | Description                     |
| ----------------------- | ------------------------------- |
| Interpolation `{{ }}`   | Display variable in UI          |
| Property Binding `[ ]`  | Pass data from component → HTML |
| Event Binding `( )`     | Handle user actions             |
| Two-Way Binding `[( )]` | Sync UI and component data      |

Example:

```html
<input [(ngModel)]="username">
```

Here:

* UI changes → variable changes
* variable changes → UI updates

---

## 2️⃣ React Hooks

**Hooks are functions that let React components use state and lifecycle features.**

Example:

```javascript
const [count, setCount] = useState(0);
```

Hooks allow:

* State management
* Lifecycle control
* Side effects

Common hooks:

| Hook           | Purpose             |
| -------------- | ------------------- |
| `useState()`   | Manage state        |
| `useEffect()`  | Handle side effects |
| `useContext()` | Access global data  |
| `useRef()`     | Access DOM elements |

---

# Key Difference

| Angular Binding                        | React Hooks                 |
| -------------------------------------- | --------------------------- |
| Connects data between UI and component | Manages state and lifecycle |
| Handles data flow                      | Handles component logic     |
| Template-driven                        | JavaScript-driven           |

---

✅ **Better comparison:**

Angular Binding ≈ **React props + state rendering**

NOT React hooks.

---

# Simple Way to Remember

* **Angular Binding → UI ↔ Data connection**
* **React Hooks → Manage component behavior**

---
```
```
# Angular Component Rendering & TypeScript Basics

## Creating a Component

Command:

```bash
npx ng generate component appointment-list
```

or short form:

```bash
npx ng g c appointment-list
```

This command creates a new component with the following files:

```
appointment-list/
│
├── appointment-list.component.html   → Template (UI structure)
├── appointment-list.component.ts     → Component logic (TypeScript)
├── appointment-list.component.css    → Styling
└── appointment-list.component.spec.ts → Testing file
```

---

# Rendering a Component

To display a component in Angular:

1. Open **`appointment-list.component.ts`**
2. Copy the **selector**

Example:

```ts
selector: 'app-appointment-list'
```

Now go to the **root component template**

```
src/app/app.component.html
```

Paste the selector inside it:

```html
<app-appointment-list></app-appointment-list>
```

This tells Angular to **render the AppointmentListComponent inside the root component**.

The **root component in Angular is `app.component.html`**.

---

# Running the Angular Application

Run the application using:

```bash
npx ng serve -o
```

This:

* Compiles the Angular application
* Starts a development server
* Automatically opens the browser

Application runs at:

```
http://localhost:4200
```

Output shown in browser:

```
appointment-list works!
```

This confirms that the **component has been successfully rendered**.

---

# Introduction to TypeScript

Angular is built using **TypeScript**, which is a **typed superset of JavaScript**.

Example file:

```
app.component.ts
```

Example syntax:

```ts
class AppComponent {

}
```

---

# TypeScript Variable Declarations

Examples of TypeScript variable types:

```ts
var a : number
var a : string
var a : boolean
```

Object creation example:

```ts
var app : AppComponent = new AppComponent();
```

Array declarations:

```ts
var a : number[]
var a : string[]
var a : boolean[]
var app : AppComponent[]
```

---

# One-Way Data Binding

In **one-way data binding**, data flows **from the component to the template (UI)**.

### Step 1 — Define a property in the component

File:

```
appointment-list.component.ts
```

```ts
export class AppointmentListComponent {
  appointment: string = "Take dog for a walk";
}
```

---

### Step 2 — Display the property in the template

File:

```
appointment-list.component.html
```

```html
<p>appointment-list works!</p>
<p>{{appointment}}</p>
```

---

### Output in Browser

```
appointment-list works!

Take dog for a walk
```

This is **one-way binding** because the data flows **from the component → template**.

---

# Two-Way Data Binding

In **two-way data binding**, data flows in **both directions**:

```
Component ⇄ Template
```

Meaning:

* If the **component value changes**, the UI updates.
* If the **user changes the value in the UI**, the component value updates automatically.

Angular uses **`[(ngModel)]`** for two-way binding.

Example:

```html
<input [(ngModel)]="appointment">
```

Now the **component variable and UI remain synchronized**.

---

# Summary

| Concept                 | Description                        |
| ----------------------- | ---------------------------------- |
| Component               | Building block of Angular UI       |
| `ng generate component` | Creates a new component            |
| Selector                | Used to render a component in HTML |
| `ng serve`              | Runs Angular development server    |
| One-way binding         | Component → Template               |
| Two-way binding         | Component ⇄ Template               |

---
```
```

# Creating an Appointment Interface in Angular

## 1. Generate an Interface

Run the following command:

```bash
npx ng generate interface models/appointment
```

This command creates an interface file.

### Generated File Location

```
src/app/models/appointment.ts
```

---

# 2. Appointment Interface

File: `appointment.ts`

```ts
export interface Appointment {
    id: number,
    title: string,
    date: Date
}
```

### Purpose

The **Appointment interface** defines the structure of an appointment object.

| Property | Type   | Description       |
| -------- | ------ | ----------------- |
| id       | number | Unique identifier |
| title    | string | Appointment title |
| date     | Date   | Appointment date  |

---

# 3. Using the Interface in a Component

File: `appointment-list.component.ts`

```ts
import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  appointment_1: string = "Take dog for a walk";

  appointment_2: Appointment = {
    id: 1,
    title: "Take cat for walk",
    date: new Date('2023-07-30')
  };

}
```

### Explanation

* The **Appointment interface** is imported from the models folder.
* `appointment_2` is an object of type **Appointment**.
* TypeScript ensures that the object follows the structure defined in the interface.

---

# 4. Display Data in HTML Template

File: `appointment-list.component.html`

```html
<p>appointment-list works!</p>

<p>{{appointment_1}}</p>

<p>{{appointment_2.id}}</p>
<p>{{appointment_2.title}}</p>
<p>{{appointment_2.date}}</p>
```

### Explanation

Angular uses **Interpolation (`{{ }}`)** to display component data in the template.

---

# 5. Output in Browser

```
appointment-list works!

Take dog for a walk

1

Take cat for walk

Sun Jul 30 2023 05:30:00 GMT+0530 (India Standard Time)
```

---

# Summary

| Step                    | Description                        |
| ----------------------- | ---------------------------------- |
| `ng generate interface` | Creates a TypeScript interface     |
| Interface               | Defines structure of an object     |
| Component               | Uses the interface for type safety |
| Template                | Displays data using interpolation  |


---
```
```

# Adding Two-Way Data Binding in Angular

## 1. Create an Array of Appointments

First, define an array to store appointments in the component.

File: `appointment-list.component.ts`

```ts
appointments: Appointment[] = [];
```

This array will store multiple appointment objects.

---

# 2. Create Input Fields in Template

File: `appointment-list.component.html`

```html
<div>
    <input placeholder="Appointment description">
    <input placeholder="Appointment date">
    <button>ADD</button>
</div>
```

### Output

```
[ Appointment description ] [ Appointment date ] [ ADD ]
```

At this stage, the inputs are **not connected to the TypeScript component**.

---

# 3. Enable Two-Way Data Binding

To enable two-way binding in Angular, we must use **FormsModule**.

### Step 1 — Import FormsModule

Go to:

File: `src/app/app.module.ts`

```ts
import { FormsModule } from '@angular/forms';
```

---

### Step 2 — Add FormsModule in imports

```ts
declarations: [
  AppComponent,
  AppointmentListComponent
],

imports: [
  BrowserModule,
  FormsModule
]
```

Now **FormsModule is available for use in components** like:

* `AppComponent`
* `AppointmentListComponent`

---

# 4. Apply Two-Way Binding Using ngModel

Now update the template.

File: `appointment-list.component.html`

```html
<div>
    <input 
        [(ngModel)]="newAppointmentTitle" 
        placeholder="Appointment description">

    <input 
        [(ngModel)]="newAppointmentDate" 
        type="date" 
        placeholder="Appointment date">

    <button>ADD</button>
</div>
```

---

# 5. How Two-Way Binding Works

Angular uses **`[(ngModel)]`** for two-way binding.

```
[(ngModel)]="variable"
```

This means:

```
Component Variable  ⇄  HTML Input Field
```

| Action                        | Result                        |
| ----------------------------- | ----------------------------- |
| User types in input           | Variable updates in component |
| Variable changes in component | UI updates automatically      |

---

# Example Component Variables

In `appointment-list.component.ts`:

```ts
newAppointmentTitle: string = '';
newAppointmentDate: string = '';
```

---

# Summary

| Concept           | Description                        |
| ----------------- | ---------------------------------- |
| FormsModule       | Enables form features in Angular   |
| ngModel           | Directive for two-way data binding |
| [(ngModel)]       | Syncs component data and UI        |
| Appointment Array | Stores list of appointments        |

---

# Data Flow

```
User Input → Component Variable → UI Update
```

Two-way binding keeps **component data and UI synchronized automatically**.

```
```

# Adding Event Listener to the Add Button

Now we will add an **event listener** to the **ADD button** so that when the user clicks the button, a method in the component is executed.

---

# 1. Create Method in Component

File: `appointment-list.component.ts`

Create a method named **addAppointment()** inside the component.

```ts
addAppointment() {

}
```

---

# 2. Bind Button Click Event

File: `appointment-list.component.html`

Use **Angular event binding** to call the method when the button is clicked.

```html
<button (click)="addAppointment()">ADD</button>
```

### Explanation

```
(click) → Angular event binding
addAppointment() → Method in component
```

This means that when the **ADD button is clicked**, the **addAppointment() method** will be executed.

---

# 3. Add Logic Inside Method

Now we implement the method to show the entered appointment values.

File: `appointment-list.component.ts`

```ts
addAppointment(){
  alert(this.newAppointmentTitle + " " + this.newAppointmentDate);
}
```

### Explanation

| Code                       | Meaning                               |
| -------------------------- | ------------------------------------- |
| `this.newAppointmentTitle` | Gets the title entered in input field |
| `this.newAppointmentDate`  | Gets the selected appointment date    |
| `alert()`                  | Displays the values in a popup        |

---

# 4. Result

When the user:

1. Enters **Appointment Title**
2. Selects **Appointment Date**
3. Clicks **ADD**

An alert box appears showing:

```
Title Date
```

Example:

```
Doctor Appointment 2023-07-30
```

---

# 5. Concept Demonstrated

This confirms that **Two-Way Data Binding is working**, because:

* The **input fields update the component variables** using `[(ngModel)]`.
* The **component method accesses those variables** when the button is clicked.

---

# Angular Concepts Used

| Concept            | Description              |
| ------------------ | ------------------------ |
| `(click)`          | Event binding in Angular |
| `addAppointment()` | Component method         |
| `[(ngModel)]`      | Two-way data binding     |
| `this.variable`    | Access component data    |

---

# Data Flow

```
User Input → Component Variables → Button Click Event → Method Execution
```

This is how Angular connects **UI events with component logic**.

```
```

# Adding an Appointment to the Array

Now we will store the appointment entered by the user into the **appointments array**.

File: `appointment-list.component.ts`

```ts
addAppointment(){

  if(this.newAppointmenTitle.trim().length && this.newAppointmenDate){

    let newAppointment: Appointment = {
      id: Date.now(),
      title: this.newAppointmenTitle,
      date: this.newAppointmenDate
    }

    this.appointments.push(newAppointment);

    // Clear form fields after adding appointment
    this.newAppointmenTitle = "";
    this.newAppointmenDate = new Date();

    // Temporary alert to confirm appointment was added
    alert(this.appointments.length);
  }

}
```

---

# Explanation

## 1. Validation Check

```ts
if(this.newAppointmenTitle.trim().length && this.newAppointmenDate)
```

This ensures that:

* The **title is not empty**
* The **date is selected**

`trim()` removes extra spaces.

---

# 2. Create New Appointment Object

```ts
let newAppointment: Appointment = {
  id: Date.now(),
  title: this.newAppointmenTitle,
  date: this.newAppointmenDate
}
```

| Property | Description                               |
| -------- | ----------------------------------------- |
| id       | Unique identifier using current timestamp |
| title    | Appointment description entered by user   |
| date     | Selected appointment date                 |

---

# 3. Push Appointment into Array

```ts
this.appointments.push(newAppointment);
```

This adds the new appointment to the **appointments array**.

---

# 4. Clear Form Inputs

```ts
this.newAppointmenTitle = "";
this.newAppointmenDate = new Date();
```

After adding the appointment:

* The **title input becomes empty**
* The **date resets**

This allows the user to **enter the next appointment easily**.

---

# 5. Debug Alert

```ts
alert(this.appointments.length);
```

This is just a **temporary check** to confirm that the appointment has been added.

Example:

```
1
2
3
```

The number increases each time a new appointment is added.

---

# Flow of the Feature

```
User enters Title + Date
        ↓
Click ADD button
        ↓
Validation Check
        ↓
Create Appointment Object
        ↓
Push into appointments[]
        ↓
Clear Form Fields
```

---

# Angular Concepts Used

| Concept                 | Description                             |
| ----------------------- | --------------------------------------- |
| Two-way binding         | Input fields update component variables |
| Event binding `(click)` | Button triggers method                  |
| Array `.push()`         | Stores appointments                     |
| Validation              | Prevent empty inputs                    |

---

```
```


# Displaying Appointments using `ngFor`

Now we will display the list of appointments stored in the **appointments array**.

File: `appointment-list.component.html`

We will display appointments using **HTML list (`<li>`) elements**.

To display multiple items dynamically in Angular, we use the **`*ngFor` directive**, which works like a loop.

---

# Basic Example

Static list example:

```html
<ul>
    <li>test</li>
    <li>test2</li>
</ul>
```

This displays a fixed list.

---

# Dynamic List using `ngFor`

Angular allows us to iterate over arrays using `*ngFor`.

```html
<ul>
    <li *ngFor="let appointment of appointments">
        {{appointment.title}} {{appointment.date | date:'dd.MM.yyyy'}}
    </li>
</ul>
```

---

# Explanation

| Syntax              | Meaning                                      |
| ------------------- | -------------------------------------------- |
| `*ngFor`            | Angular directive used for looping           |
| `let appointment`   | Variable representing each item in the array |
| `appointments`      | The array stored in the component            |
| `appointment.title` | Displays appointment title                   |
| `appointment.date`  | Displays appointment date                    |

---

# Angular Pipes

Angular **pipes** are used to transform data before displaying it in the UI.

Example:

```html
{{appointment.date | date:'dd.MM.yyyy'}}
```

### Breakdown

| Part               | Meaning                    |               |
| ------------------ | -------------------------- | ------------- |
| `appointment.date` | Raw date value             |               |
| `                  | `                          | Pipe operator |
| `date`             | Angular built-in date pipe |               |
| `'dd.MM.yyyy'`     | Formatting pattern         |               |

Example Output:

```
Take dog for a walk 30.07.2023
```

---

# Alternative Display (Including ID)

```html
<ul>
    <li *ngFor="let appointment of appointments">
        {{appointment.id}} {{appointment.title}} {{appointment.date | date:'dd.MM.yyyy'}}
    </li>
</ul>
```

Example Output:

```
1 Doctor Appointment 30.07.2023
2 Meeting with Client 02.08.2023
```

---

# Concepts Used

| Concept               | Description                             |
| --------------------- | --------------------------------------- |
| `*ngFor`              | Loop through array in Angular templates |
| Pipes                 | Transform data before displaying        |
| Interpolation `{{ }}` | Display component data in HTML          |
| Array iteration       | Render multiple UI elements dynamically |

---

```
```

# Removing Appointments

Now we will add functionality to **remove an appointment from the list**.

---

# 1. Create Delete Method in Component

File: `appointment-list.component.ts`

We create a method named **deleteAppointment** that removes an item from the `appointments` array.

```ts
deleteAppointment(index: number){
  this.appointments.splice(index, 1);
}
```

### Explanation

| Code               | Meaning                                         |
| ------------------ | ----------------------------------------------- |
| `index`            | Position of the appointment in the array        |
| `splice()`         | JavaScript method to remove items from an array |
| `splice(index, 1)` | Removes 1 element starting from the given index |

---

# 2. Update Appointment List Template

File: `appointment-list.component.html`

Add a **Delete button** for each appointment.

```html
<ul>
    <li *ngFor="let appointment of appointments; index as i">
        {{appointment.title}} {{appointment.date | date:'dd.MM.yyyy'}}
        <button (click)="deleteAppointment(i)">Delete</button>
    </li>
</ul>
```

---

# Explanation

| Syntax                 | Meaning                                     |
| ---------------------- | ------------------------------------------- |
| `*ngFor`               | Angular directive to loop through the array |
| `let appointment`      | Variable representing each appointment      |
| `index as i`           | Gets the index of each item                 |
| `(click)`              | Angular event binding                       |
| `deleteAppointment(i)` | Calls the delete method with index          |

---

# How It Works

```
Appointments Array
        ↓
Rendered using *ngFor
        ↓
User clicks Delete
        ↓
deleteAppointment(index) called
        ↓
splice() removes item from array
        ↓
Angular automatically updates the UI
```

---

# Example

Before deleting:

```
1 Doctor Appointment
2 Meeting with Client
3 Gym Session
```

After clicking delete on the second item:

```
1 Doctor Appointment
3 Gym Session
```

---

# Concepts Used

| Concept      | Description                                 |
| ------------ | ------------------------------------------- |
| `*ngFor`     | Iterates through array in Angular template  |
| `index as i` | Gets position of item in loop               |
| `(click)`    | Event binding                               |
| `splice()`   | Removes element from array                  |
| Data binding | Automatically updates UI when array changes |

---

# Final Result

Users can now:

* Add appointments
* View appointments
* Delete appointments

This creates a **simple working Appointment Manager in Angular**.

```
```

# Storing Appointments in LocalStorage

To persist appointments even after refreshing the page, we store them in the **browser's Local Storage**.

File: `appointment-list.component.ts`

Add the following line inside both **`addAppointment()`** and **`deleteAppointment()`** methods:

```ts
localStorage.setItem("appointments", JSON.stringify(this.appointments));
```

## Explanation

| Function                 | Purpose                                        |
| ------------------------ | ---------------------------------------------- |
| `localStorage.setItem()` | Stores data in browser storage                 |
| `"appointments"`         | Key used to store data                         |
| `JSON.stringify()`       | Converts JavaScript object/array into a string |

LocalStorage can only store **strings**, so we convert the `appointments` array into **JSON format** before storing it.

---

## Current Behavior

* Appointments are successfully **saved in LocalStorage**.
* However, after **refreshing the page**, the appointments are **not visible in the UI**.

This happens because the application **does not load the stored data when the component initializes**.

---
```
```
# Using `ngOnInit` to Load Appointments from LocalStorage

To fix this, we use **Angular Lifecycle Hook `ngOnInit()`**.

`ngOnInit()` runs automatically when the component **initializes**.

---

## Step 1: Import `OnInit`

File: `appointment-list.component.ts`

```ts
import { Component, OnInit } from '@angular/core';
```

---

## Step 2: Implement `OnInit` in Component

```ts
export class AppointmentListComponent implements OnInit {

  appointment_1: string = "Take dog for a walk";

  appointment_2: Appointment = {
    id: 1,
    title: "Take cat for walk",
    date: new Date('2023-07-30')
  };

  newAppointmenTitle: string = "";
  newAppointmenDate: Date = new Date();

  appointments: Appointment[] = [];

  ngOnInit(): void {
    console.log("got loaded");
  }

}
```

Now when the page reloads, the console shows:

```
got loaded
```

This confirms that **`ngOnInit()` runs when the component loads**.

---

## Step 3: Load Appointments from LocalStorage

Update `ngOnInit()` as follows:

```ts
ngOnInit(): void {
  let savedAppointments = localStorage.getItem("appointments");
  this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
}
```

---

## Explanation

| Code                                   | Meaning                                                  |
| -------------------------------------- | -------------------------------------------------------- |
| `localStorage.getItem("appointments")` | Retrieves stored data                                    |
| `JSON.parse()`                         | Converts JSON string back to JavaScript object           |
| `savedAppointments ? ... : []`         | If data exists, load it; otherwise create an empty array |

---

## Logic Flow

```
Application Loads
        ↓
ngOnInit() runs
        ↓
Check LocalStorage for appointments
        ↓
If data exists → Load appointments
Else → Initialize empty array
        ↓
UI displays stored appointments
```

---

## Final Result

* Appointments are **saved in LocalStorage**
* When the page **refreshes**, data is **loaded automatically**
* The appointment list **remains visible**

This makes the **Angular Appointment Manager persistent**.

```
```


# Styling Angular Application using Bootstrap

Bootstrap is a popular CSS framework used to create **responsive and well-designed user interfaces quickly**.

---

## 1. Install Bootstrap

Run the following command in your Angular project directory:

```bash
npm install bootstrap@5.3
```

This installs **Bootstrap version 5.3** inside the `node_modules` folder.

---

## 2. Import Bootstrap CSS

To use Bootstrap styles in your Angular project, import the Bootstrap stylesheet.

File: `src/styles.css`

Add the following line:

```css
@import "~bootstrap/dist/css/bootstrap.min.css";
```

---

## 3. What This Does

| Step              | Purpose                                  |
| ----------------- | ---------------------------------------- |
| Install Bootstrap | Adds Bootstrap library to the project    |
| Import CSS        | Enables Bootstrap styling across the app |
| Global Styling    | All components can use Bootstrap classes |

---

## 4. Using Bootstrap Classes

Now you can use Bootstrap classes directly in your Angular templates.

Example:

```html
<div class="container mt-4">
    <h2 class="text-center">Appointment Manager</h2>

    <div class="row mt-3">
        <div class="col-md-5">
            <input class="form-control" placeholder="Appointment description">
        </div>

        <div class="col-md-4">
            <input type="date" class="form-control">
        </div>

        <div class="col-md-3">
            <button class="btn btn-primary w-100">Add</button>
        </div>
    </div>
</div>
```

---

## Common Bootstrap Classes

| Class          | Purpose                             |
| -------------- | ----------------------------------- |
| `container`    | Creates responsive layout container |
| `row`          | Creates grid row                    |
| `col`          | Grid column                         |
| `form-control` | Styles input fields                 |
| `btn`          | Base button styling                 |
| `btn-primary`  | Primary styled button               |
| `mt-3`         | Margin top spacing                  |

---

## Result

Using Bootstrap provides:

* Better **layout structure**
* Built-in **responsive design**
* Pre-styled **buttons, forms, and components**
* Faster UI development

---

## Note

Bootstrap styles will now apply **globally across the Angular application** since they are imported in `styles.css`.

```
```
