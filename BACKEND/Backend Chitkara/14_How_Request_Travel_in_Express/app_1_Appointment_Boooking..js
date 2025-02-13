const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Array to store available time slots
let availableSlots = ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Appointment Booking</h1><p>Use /available-slots to view slots or /book to book an appointment.</p>');
});

// Route to book an appointment
app.post('/book', (req, res) => {
    const { time } = req.body;
    
    if (!time) {
        return res.status(400).json({ message: "Time slot is required" });
    }

    const index = availableSlots.indexOf(time);
    
    if (index !== -1) {
        // Remove the booked slot from available slots
        availableSlots.splice(index, 1);
        return res.status(200).json({ message: `Appointment booked for ${time}` });
    } else {
        return res.status(400).json({ message: "Time slot not available" });
    }
});

// Route to get available slots
app.get('/available-slots', (req, res) => {
    res.json({ availableSlots });
});

// Route to cancel a booking
app.post('/cancel', (req, res) => {
    const { time } = req.body;
    
    if (!time) {
        return res.status(400).json({ message: "Time slot is required for cancellation" });
    }

    if (!availableSlots.includes(time)) {
        availableSlots.push(time);
        return res.status(200).json({ message: `Appointment for ${time} has been cancelled` });
    } else {
        return res.status(400).json({ message: "Time slot was not booked" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
