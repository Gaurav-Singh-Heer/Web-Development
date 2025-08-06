const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Dummy student data
const students = [
    { id: 1, name: "Gaurav Singh", age: 21, course: "B.Tech CSE", hobbies: ["Coding", "Music"] },
    { id: 2, name: "Arshiya Gupta", age: 22, course: "BCA", hobbies: ["Painting", "Reading"] },
    { id: 3, name: "Agam Sharma", age: 20, course: "B.Sc CS", hobbies: ["Gaming", "Designing"] },
    { id: 4, name: "Aryan Kaushal", age: 22, course: "BC", hobbies: ["Riding", "Reading"] },
];

// Home Route
app.get('/', (req, res) => {
    res.render('pages/home', { students });
});

// Dynamic Student Route
app.get('/student/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) return res.status(404).send("Student not found");
    res.render('pages/student', { student });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
