const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

const books = [
  { title: 'The Alchemist', author: 'Paulo Coelho', available: true },
  { title: '1984', author: 'George Orwell', available: false },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', available: true },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: false }
];

app.get('/books', (req, res) => {
  const showAvailableOnly = req.query.available === 'true';
  const filteredBooks = showAvailableOnly ? books.filter(b => b.available) : books;

  res.render('books2', { books: filteredBooks });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/books`);
  console.log(`Server running at http://localhost:${port}/books?available=true`);
});
