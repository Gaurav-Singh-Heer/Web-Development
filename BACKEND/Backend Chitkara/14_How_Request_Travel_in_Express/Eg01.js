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
const validateAppoinment = (req, res, next) => {
    const { name, date, time } = req.body
    if (!name || !date || !time) {
        return res.status(400).send('Please provide name, date, and time')
    }
    console.log(`Booking appointment for ${name} at ${time} on ${date}`)
    next()
}
// Step 4: Route Matching - /book-appointment
app.post('/book-appointment', validateAppoinment, (req, res) => {
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
/*
Steps to Execute:
    In Postman, send a POST request to /book-appointment with JSON body:
        {
        "name": "Pranit Thakur",
        "date": "2025-04-15",
        "time": "10:00 AM"
        }
Expected Logs:
    Server running on port 8080
    Request received at /book-appointment
    Booking appointment for Pranit Thakur at 10:00 AM on 12-04-2025
    Appointment confirmed for Pranit Thakur at 10:00 AM on 12-04-2025
*/
