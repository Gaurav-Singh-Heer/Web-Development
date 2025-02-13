# Express Request-Response Cycle

## 1. Client Sends Request
A client (usually a browser or a tool like Postman) sends an HTTP request (GET, POST, PUT, DELETE, etc.) to the Express server.

## 2. Request Reaches Express App
The request is received by the Express server, which listens on a specific port for incoming HTTP requests.

## 3. Middleware Processing
- Express processes the request through a series of middleware functions. Middleware can modify the request, perform checks, log data, parse request bodies, and more.
- Middleware functions are executed in the order they are defined in the app. If a middleware function doesn't call `next()`, the request-response cycle will be halted.

## 4. Route Matching
Once the middleware functions are processed, Express will look for a route that matches the HTTP method and the request URL (path).

For example, if the request is a GET request to `/users`, Express will search for a route that looks like this:

```javascript
app.get('/users', (req, res) => {
    res.send('Users list');
});
```

If a matching route is found, the route handler is invoked, and the response is sent back to the client.

## 5. Route Handler
The route handler is a function that processes the request and sends a response. It has access to the request (`req`) and response (`res`) objects.

For example:

```javascript
app.get('/users', (req, res) => {
    res.json({ users: [] }); // Respond with JSON data
});
```

## 6. Final Response
The final response is sent back to the client. This could be HTML, JSON, plain text, or another type of content, depending on how the route handler is structured.

## 7. Error Handling
If there's an error at any point (e.g., middleware fails, route handler has issues), Express will pass the error to an error-handling middleware function. These functions are defined with four arguments: `err, req, res, next`.

For example:

```javascript
app.use((err, req, res, next) => {
    res.status(500).send('Something went wrong!');
});
```

## 8. Response Sent to Client
After the response is sent, the request-response cycle ends, and the connection is closed (or kept alive for further requests if using HTTP/2 or persistent connections).

## Example 1: Booking an Appointment

### Backend Code:

```javascript
const express = require('express');
const app = express();

const PORT = 8080; // Define port

app.use(express.json()); // Middleware to parse JSON bodies

// Logging Middleware
app.use((req, res, next) => {
    console.log("Request Received at", req.path);
    next();
});

// Validate appointment details
const validateAppointment = (req, res, next) => {
    const { name, date, time } = req.body;

    if (!name || !date || !time) {
        return res.status(400).send('Please provide name, date, and time');
    }

    console.log(`Booking appointment for ${name} at ${time} on ${date}`);
    next();
};

// Mock available slots
const availableSlots = ['10:00 AM', '2:00 PM', '4:00 PM'];

// Booking an appointment
app.post('/book-appointment', validateAppointment, (req, res) => {
    const { name, date, time } = req.body;

    if (!availableSlots.includes(time)) {
        return res.status(400).send({ message: 'Time slot not available' });
    }

    console.log(`Appointment confirmed for ${name} at ${time} on ${date}`);
    res.status(201).send({ message: `Appointment booked for ${name} on ${date} at ${time}` });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error Caught:', err);
    res.status(500).send("Something went wrong");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

## Example 2: Booking a Cab

### Backend Code:

```javascript
const express = require('express');
const app = express();

const PORT = 8080; // Define port

app.use(express.json()); // Middleware to parse JSON bodies

// Logging Middleware
app.use((req, res, next) => {
    console.log("Request Received at", req.path);
    next();
});

// Validate Cab Booking Details
const validateCabBooking = (req, res, next) => {
    const { pickupLocation, destination, passengerName } = req.body;

    if (!pickupLocation || !destination || !passengerName) {
        return res.status(400).send('Please provide pickup location, destination, and passenger name');
    }

    console.log(`Booking cab for ${passengerName} from ${pickupLocation} to ${destination}`);
    next();
};

// Mock available cabs based on location
const availableCabs = ['Chandigarh', 'Rajpura', 'Ambala', 'Mohali'];

// Booking a cab
app.post('/book-cab', validateCabBooking, (req, res) => {
    const { pickupLocation, destination, passengerName } = req.body;

    if (!availableCabs.includes(pickupLocation)) {
        return res.status(400).send({ message: 'No cabs available at this location' });
    }

    console.log(`Cab booked for ${passengerName} from ${pickupLocation} to ${destination}`);
    res.status(201).send({ message: `Cab booked successfully from ${pickupLocation} to ${destination}` });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error Caught:', err);
    res.status(500).send("Something went wrong");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```