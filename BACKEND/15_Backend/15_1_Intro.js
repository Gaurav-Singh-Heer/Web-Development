/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('GauravkaPersonalData');

// Insert a few documents into the sales collection.
db.getCollection('languages').insertMany([
    { name: "Python", duration: "3 months", instructor: "Alice" },
    { name: "JavaScript", duration: "2 months", instructor: "Bob" },
    { name: "Java", duration: "4 months", instructor: "Charlie" },
    { name: "C++", duration: "3 months", instructor: "David" },
    { name: "HTML & CSS", duration: "1.5 months", instructor: "Eve" },
    { name: "Data Science", duration: "6 months", instructor: "Frank" },
    { name: "Machine Learning", duration: "5 months", instructor: "Grace" },
    { name: "ReactJS", duration: "2.5 months", instructor: "Hannah" },
    { name: "NodeJS", duration: "3 months", instructor: "Ian" },
    { name: "SQL", duration: "2 months", instructor: "Jack" }
]);

// Print a message to the output window.
console.log(`Done Inserting Data`);
