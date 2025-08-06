const express = require('express');
const morgan = require('morgan');

const app = express();

// Use 'dev' mode: concise output with colored status codes (good for development)
app.use(morgan('dev'));

// Use 'combined' mode: standard Apache combined log format (more detailed, good for production)
// app.use(morgan('combined'));

// Use 'common' mode: standard Apache common log format (less detailed than 'combined')
// app.use(morgan('common'));

// Use 'tiny' mode: minimal output (method, URL, status, response time)
// app.use(morgan('tiny'));


// Root route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// About Us route
app.get('/aboutus', (req, res) => {
  res.send('About us page!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
