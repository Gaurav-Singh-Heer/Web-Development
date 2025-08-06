const fs = require('fs');
const path = require('path');
const readline = require('readline');

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

function main(name, age, course) {
    createStudentFolder(name);
    writeStudentProfile(name, age, course);
    readStudentProfile(name);
}

// Sample usage
main('John', 21, 'Computer Science');

// Take input from user
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

    main(name, age, course);
    rl.close();
}

getUserInput();
