const fs = require('fs');
const prompt = require('prompt-sync')();             // npm install prompt-sync

const filePath = 'students.json';

// 1. Get user input
const name = prompt("Enter student's name: ");
const email = prompt("Enter student's email: ");
const age = prompt("Enter student's age: ");

// 2. Create student object
const student = {
    name: name,
    email: email,
    age: parseInt(age)
};

// 3. Load existing students (if file exists)
let students = [];

if (fs.existsSync(filePath)) {
    const existingData = fs.readFileSync(filePath, 'utf-8');
    students = JSON.parse(existingData);
}

// 4. Add new student
students.push(student);

// 5. Save back to students.json
fs.writeFileSync(filePath, JSON.stringify(students, null, 2));

// 6. Read and print
console.log('\nSaved Students:');
students.forEach((s, index) => {
    console.log(`${index + 1}. Name: ${s.name}, Email: ${s.email}, Age: ${s.age}`);
});
