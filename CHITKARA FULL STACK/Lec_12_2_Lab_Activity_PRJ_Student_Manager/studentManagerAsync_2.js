const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

const baseDir = path.join(__dirname, 'students');

async function createStudentFolder(studentName) {
    const studentPath = path.join(baseDir, studentName);
    try {
        await fs.mkdir(studentPath, { recursive: true });
        console.log(`Created folder: ${studentName}`);
    } catch (err) {
        console.error(`Error creating folder: ${err}`);
    }
}

async function writeStudentProfile(studentName, age, course) {
    const profilePath = path.join(baseDir, studentName, 'profile.txt');
    const content = `Name: ${studentName}\nAge: ${age}\nCourse: ${course}`;
    try {
        await fs.writeFile(profilePath, content);
        console.log(`Wrote profile for ${studentName}`);
    } catch (err) {
        console.error(`Error writing profile: ${err}`);
    }
}

async function readStudentProfile(studentName) {
    const profilePath = path.join(baseDir, studentName, 'profile.txt');
    try {
        const data = await fs.readFile(profilePath, 'utf-8');
        console.log(`\nReading Profile for ${studentName}:\n${data}`);
    } catch (err) {
        console.error(`Profile for ${studentName} not found.`);
    }
}

async function main(name, age, course) {
    await createStudentFolder(name);
    await writeStudentProfile(name, age, course);
    await readStudentProfile(name);
}

// Sample usage
(async () => {
    await main('John', 21, 'Computer Science');

    // Input from user
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const askQuestion = (q) => new Promise(res => rl.question(q, res));

    const name = await askQuestion('\nEnter student name: ');
    const age = await askQuestion('Enter age: ');
    const course = await askQuestion('Enter course: ');

    await main(name, age, course);
    rl.close();
})();
