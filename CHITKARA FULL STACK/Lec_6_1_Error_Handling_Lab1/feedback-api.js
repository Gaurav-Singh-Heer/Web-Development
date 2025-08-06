const express = require('express');
const app = express();

app.use(express.json());

// In-memory array to store feedbacks
const feedbacks = [];

// POST /feedback
app.post('/feedback', (req, res, next) => {
    try {
        const { studentId, courseCode, rating, comments } = req.body;

        // Input Validation
        if (!studentId) {
            throw new Error("studentId is required");
        }

        if (!courseCode) {
            throw new Error("courseCode is required");
        }

        if (typeof rating !== 'number' || rating < 1 || rating > 5) {
            throw new Error("rating must be a number between 1 and 5");
        }

        // Simulate saving feedback
        const feedback = { studentId, courseCode, rating, comments };
        feedbacks.push(feedback);

        // Return success response
        res.status(201).json({ message: "Feedback submitted successfully", feedback });

    } catch (error) {
        next(error); // Pass error to centralized middleware
    }
});

// Centralized Error Handler
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(400).json({ error: err.message });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Feedback API server running at http://localhost:${PORT}`);
});
