const fs = require('fs').promises;
const path = require('path');

const baseDir = path.join(__dirname, 'students');

async function createStudentFolder(studentName) {
    const studentPath = path.join(baseDir, studentName);
    try {
        await fs.mkdir(studentPath, { recursive: true });
        console.log(`✅ Created folder: ${studentName}`);
    } catch (err) {
        console.error(`❌ Error creating folder: ${err}`);
    }
}

async function writeStudentProfile(studentName, age, course) {
    const profilePath = path.join(baseDir, studentName, 'profile.txt');
    const content = `Name: ${studentName}\nAge: ${age}\nCourse: ${course}`;
    try {
        await fs.writeFile(profilePath, content);
        console.log(`✅ Wrote profile for ${studentName}`);
    } catch (err) {
        console.error(`❌ Error writing profile: ${err}`);
    }
}

async function readStudentProfile(studentName) {
    const profilePath = path.join(baseDir, studentName, 'profile.txt');
    try {
        const data = await fs.readFile(profilePath, 'utf-8');
        console.log(`\n📖 Reading Profile for ${studentName}:\n${data}`);
    } catch (err) {
        console.error(`❌ Profile for ${studentName} not found.`);
    }
}

// Sample Usage
(async () => {
    await createStudentFolder('John');
    await writeStudentProfile('John', 21, 'Computer Science');
    await readStudentProfile('John');
})();

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
