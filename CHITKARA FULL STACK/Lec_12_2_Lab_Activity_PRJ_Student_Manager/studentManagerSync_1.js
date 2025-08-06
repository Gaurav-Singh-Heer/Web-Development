const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'students');

function createStudentFolder(studentName) {
    const studentPath = path.join(baseDir, studentName);
    if (!fs.existsSync(studentPath)) {
        fs.mkdirSync(studentPath, { recursive: true });
        console.log(`Created folder: ${studentName}`);
    }
}

function writeStudentProfile(studentName, age, course) {
    const profilePath = path.join(baseDir, studentName, 'profile.txt');
    const content = `Name: ${studentName}\nAge: ${age}\nCourse: ${course}`;
    fs.writeFileSync(profilePath, content);
    console.log(`Wrote profile for ${studentName}`);
}

function readStudentProfile(studentName) {
    const profilePath = path.join(baseDir, studentName, 'profile.txt');
    if (fs.existsSync(profilePath)) {
        const data = fs.readFileSync(profilePath, 'utf-8');
        console.log(`\nReading Profile for ${studentName}:\n${data}`);
    } else {
        console.log(`Profile for ${studentName} not found.`);
    }
}

// Sample Usage
createStudentFolder('John');
writeStudentProfile('John', 21, 'Computer Science');
readStudentProfile('John');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function getUserInput() {
    const name = await askQuestion('\nEnter student name: ');
    const age = await askQuestion('Enter age: ');
    const course = await askQuestion('Enter course: ');

    await main(name, age, course);  // defined below
    rl.close();
}
