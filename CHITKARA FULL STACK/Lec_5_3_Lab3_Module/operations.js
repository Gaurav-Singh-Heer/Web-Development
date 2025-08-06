// operations.js

const books = []; // In-memory array to store books

function addBook(book) {
    books.push(book);
    console.log("✅ Book added successfully!\n");
}

function listBooks() {
    if (books.length === 0) {
        console.log("❌ No books available.");
        return;
    }
    console.table(books);
}

function searchBook(keyword) {
    const results = books.filter(book =>
        book.title.toLowerCase().includes(keyword.toLowerCase())
    );

    if (results.length === 0) {
        console.log("❌ No matching books found.");
    } else {
        console.log(`🔍 Found ${results.length} matching book(s):`);
        console.table(results);
    }
}

module.exports = { addBook, listBooks, searchBook };
