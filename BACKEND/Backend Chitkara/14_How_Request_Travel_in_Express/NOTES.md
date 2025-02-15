```markdown
# How Request Travels in Express

**Date:** 13 Feb 2025  
**Reference:** [Short URL](https://shorturl.at/G2IAP)  
**Group:** G17 BEE  

---

## How Request Travels in Express

1. **Client Sends Request**  
2. **Request Reaches Express App**  
3. **Middleware Processing**  
4. **Route Matching**  
5. **Route Handler**  
6. **Final Response**  
7. **Error Handling**  
8. **Response Sent to Client**  

### 1. Client Sends Request
- A client (usually a browser or a tool like Postman) sends an HTTP request (GET, POST, PUT, DELETE, etc.) to the Express server.  

### 2. Request Reaches Express App
- The request is received by the Express server, which listens on a specific port for incoming HTTP requests.  

### 3. Middleware Processing
- Express processes the request through a series of middleware functions. Middleware can modify the request, perform checks, log data, parse request bodies, and more.  
- Middleware functions are executed in the order they are defined in the app. If a middleware function doesn’t call `next()`, the request-response cycle will be halted.  

### 4. Route Matching
- Once the middleware functions are processed, Express will look for a route that matches the HTTP method and the request URL (path).  
- Example:  

```js
app.get('/users', (req, res) => {
  res.send('Users list');
});
```

- If a matching route is found, the route handler is invoked, and the response is sent back to the client.  

### 5. Route Handler
- The route handler is a function that processes the request and sends a response. It has access to the request (`req`) and response (`res`) objects.  
- Example:  

```js
app.get('/users', (req, res) => {
  res.json({ users: [] }); // Respond with JSON data
});
```

### 6. Final Response
- The final response is sent back to the client. This could be HTML, JSON, plain text, or another type of content, depending on how the route handler is structured.  

### 7. Error Handling
- If there's an error at any point (e.g., middleware fails, route handler has issues), Express will pass the error to an error-handling middleware function. These functions are defined with four arguments: `err, req, res, next`.  

Example:

```js
app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong!');
});
```

### 8. Response Sent to Client
- After the response is sent, the request-response cycle ends, and the connection is closed (or kept alive for further requests if using HTTP/2 or persistent connections).  

---

## Example 1: Booking an Appointment  

### Problem Definition  
A client will request to book an appointment. Design the app that will verify the requested time slot, check for availability, and confirm the booking.  

### Code Implementation  

```js
const express = require('express')
const app = express()

// Define port
const port = 8080

// Middleware to parse JSON bodies
app.use(express.json())

// Step 1: Client Sends Request
// Client sends a POST request to /book-appointment with appointment data.

// Step 2: Request Reaches Express App
app.use((req, res, next) => {
    console.log('Request received at', req.path)
    next()
})

// Step 3: Middleware Processing (Validate Appointment Data)
const validateAppointment = (req, res, next) => {
    const { name, date, time } = req.body
    if (!name || !date || !time) {
        return res.status(400).send('Please provide name, date, and time')
    }
    console.log(`Booking appointment for ${name} at ${time} on ${date}`)
    next()
}

// Step 4: Route Matching - /book-appointment
app.post('/book-appointment', validateAppointment, (req, res) => {
    const { name, date, time } = req.body

    // Mock appointment availability check (assume all slots are available)
    const availableSlots = ['10:00 AM', '2:00 PM', '4:00 PM']
    if (!availableSlots.includes(time)) {
        return res.status(400).send('Time slot not available')
    }

    console.log(`Appointment confirmed for ${name} at ${time} on ${date}`)
    res.send(`Appointment booked for ${name} on ${date} at ${time}`)
})

// Step 5: Error Handling
app.use((err, req, res, next) => {
    console.log('Error caught', err)
    res.status(500).send('Something went wrong!')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
```

### Steps to Execute:  
1. In Postman, send a POST request to `/book-appointment` with JSON body:  

```json
{
    "name": "Pranit Thakur",
    "date": "2025-04-15",
    "time": "10:00 AM"
}
```

### Expected Logs:  
```
Server running on port 8080  
Request received at /book-appointment  
Booking appointment for Pranit Thakur at 10:00 AM on 12-04-2025  
Appointment confirmed for Pranit Thakur at 10:00 AM on 12-04-2025  
```

### Explanation:  
1. Client sends request to `/book-appointment` with data including name, date, and time.  
2. Request reaches Express, and the first middleware logs the request.  
3. The validation middleware checks if all required fields are provided.  
4. The route handler checks if the selected time slot is available and confirms the appointment.  
5. If there's an error (e.g., missing fields or unavailable time slot), an error message is returned.  

---

## Example 2: Booking a Cab  

### Problem Definition  
User handles the booking of a cab, where the user specifies pickup location and destination. The system checks if a cab is available in the area, then confirms the booking.  

### Code Implementation  

```js
// Step 3: Middleware Processing (Validate Cab Booking Data)
const validateCabBooking = (req, res, next) => {
    const { pickupLocation, destination, passengerName } = req.body
    if (!pickupLocation || !destination || !passengerName) {
        return res.status(400).send('Please provide pickup location, destination, and passenger name')
    }
    console.log(`Booking cab for ${passengerName} from ${pickupLocation} to ${destination}`)
    next()
}

// Step 4: Route Matching - /book-cab
app.post('/book-cab', validateCabBooking, (req, res) => {
    const { pickupLocation, destination } = req.body

    // Mock available cabs based on location
    const availableCabs = ['Chandigarh', 'Rajpura', 'Ambala', 'Mohali']
    if (!availableCabs.includes(pickupLocation)) {
        return res.status(400).send('No cabs available at this location')
    }

    console.log(`Cab booked from ${pickupLocation} to ${destination}`)
    res.send(`Cab booked successfully from ${pickupLocation} to ${destination}`)
})
```
---