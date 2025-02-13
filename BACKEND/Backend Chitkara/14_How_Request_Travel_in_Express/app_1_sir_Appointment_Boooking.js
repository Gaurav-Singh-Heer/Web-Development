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