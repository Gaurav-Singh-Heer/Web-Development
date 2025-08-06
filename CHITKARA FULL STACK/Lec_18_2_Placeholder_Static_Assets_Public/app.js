const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images) from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/mother', (req, res) => {
    res.render('mother');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
