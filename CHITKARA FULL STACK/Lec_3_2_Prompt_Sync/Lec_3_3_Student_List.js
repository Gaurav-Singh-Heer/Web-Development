const fs = require('fs');

const filePath = 'students.json';

if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const students = JSON.parse(data);

    console.log('\n📋 List of All Students:\n');
    students.forEach((s, index) => {
        console.log(`${index + 1}. Name: ${s.name}, Email: ${s.email}, Age: ${s.age}`);
    });
} else {
    console.log("No student data found.");
}
