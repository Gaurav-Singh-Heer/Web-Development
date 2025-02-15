const express = require('express')
const app = express()
// Define port
const port = 8080
// Middleware to parse JSON bodies
app.use(express.json())
// Step 1: Client Sends Request
// Client sends a POST request to /book-cab with booking details.
// Step 2: Request Reaches Express App
app.use((req, res, next) => {
    console.log('Request received at', req.path)
    next()
})
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
// Step 5: Error Handling
app.use((err, req, res, next) => {
    console.log('Error caught', err)
    res.status(500).send('Something went wrong!')
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
/*
Steps to Execute:
        In Postman, send a POST request to /book-cab with JSON body:
        {
        "passengerName": "Pranit Thakur",
        "pickupLocation": "Rajpura",
        "destination": "Ambala"
        }
Expected Logs:
    Server running on port 8080
    Request received at /book-cab
    Booking cab for Pranit Thakur from Rajpura to Ambala
    Cab booked from Rajpura to Ambala
*/