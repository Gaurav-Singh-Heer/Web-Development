const express = require('express');
const path = require('path');
const app = express();
const port = 3002;

// Sample book data
const books = [
  { title: "The Alchemist", author: "Paulo Coelho", available: true },
  { title: "1984", author: "George Orwell", available: false },
  { title: "To Kill a Mockingbird", author: "Harper Lee", available: true }
];

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render book list
app.get('/books', (req, res) => {
  res.render('books', { books });
});

app.get('/myMotherAtSixtySix', (req, res) => {
  res.render('myMotherAtSixtySix');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/books`);
  console.log(`Server running at http://localhost:${port}/myMotherAtSixtySix`);
});
