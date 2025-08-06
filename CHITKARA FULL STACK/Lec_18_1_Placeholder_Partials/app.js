const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes
app.get('/', (req, res) => {
  res.render('index'); // views/index.ejs
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
