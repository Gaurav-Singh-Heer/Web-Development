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
