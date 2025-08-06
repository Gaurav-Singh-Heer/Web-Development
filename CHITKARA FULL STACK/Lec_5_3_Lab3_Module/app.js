// app.js

const readline = require("readline");
const Book = require("./book");
const { addBook, listBooks, searchBook } = require("./operations");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu() {
    console.log("\n📚 Book Management System");
    console.log("1. Add Book");
    console.log("2. List All Books");
    console.log("3. Search Book by Title");
    console.log("4. Exit");

    rl.question("Choose an option: ", answer => {
        switch (answer.trim()) {
            case "1":
                addBookPrompt();
                break;
            case "2":
                listBooks();
                mainMenu();
                break;
            case "3":
                rl.question("Enter title or keyword to search: ", keyword => {
                    searchBook(keyword);
                    mainMenu();
                });
                break;
            case "4":
                rl.close();
                break;
            default:
                console.log("❗ Invalid option.");
                mainMenu();
        }
    });
}

function addBookPrompt() {
    rl.question("Enter Book Title: ", title => {
        rl.question("Enter Author Name: ", author => {
            rl.question("Enter ISBN: ", isbn => {
                const book = new Book(title, author, isbn);
                addBook(book);
                mainMenu();
            });
        });
    });
}

// Start the CLI
mainMenu();
