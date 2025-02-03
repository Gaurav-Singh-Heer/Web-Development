// app.js
const express = require('express');
const bodyParser = require('express').urlencoded({ extended: true });
const authRoutes = require('./routes/authRoutes');
const app = express();

// Middleware
app.use(bodyParser);
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use(authRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
