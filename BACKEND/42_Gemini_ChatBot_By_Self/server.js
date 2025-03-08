const express = require('express');
const path = require('path');
const sahayakRoutes = require('./routes/sahayakRoutes');
// const bodyParser = require('body-parser');                                   // NOT REQUIRED FOR CHATBOT
// const cors = require('cors')                                                 // NOT REQUIRED FOR CHATBOT
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// app.use(cors()); // Use parentheses to invoke CORS middleware                // NOT REQUIRED FOR CHATBOT
// app.use(bodyParser.json()); //middleware 6                                   // NOT REQUIRED FOR CHATBOT

// Use sahayak routes
app.use(sahayakRoutes);

// Route to serve home.html when visiting /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
