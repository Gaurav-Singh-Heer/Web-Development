import inquirer from 'inquirer';
import promptSync from 'prompt-sync';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import dayjs from 'dayjs';
import { generatePDF } from './utils/generatePDF.js';
import { generateJSON } from './utils/generateJSON.js';
import { validateEmail, validateAge } from './utils/inputValidator.js';
import FormData from 'form-data';

const prompt = promptSync();
const args = process.argv.slice(2);
const outputDir = './resumes';
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// Function to upload
async function uploadFileToServer(filePath) {
    try {
        const fileStream = fs.createReadStream(filePath);
        const form = new FormData();
        form.append('file', fileStream);

        const response = await axios.post('http://localhost:5000/upload-file', form, {
            headers: form.getHeaders()
        });

        console.log('📤 File uploaded to file server.');
    } catch (err) {
        console.error('❌ Upload failed:', err.message);
    }
}

// Quick Resume with Flags
if (args.length && args[0].startsWith('--')) {
    const inputs = {};
    args.forEach(arg => {
        const [key, value] = arg.split('=');
        inputs[key.replace('--', '')] = value?.replace(/['"]+/g, '');
    });

    if (!validateEmail(inputs.email) || !validateAge(inputs.age)) {
        console.log("❌ Invalid email or age.");
        process.exit(1);
    }

    // Ask format (even in CLI mode)
    const { format } = await inquirer.prompt([{
        type: 'list',
        name: 'format',
        message: 'Select output format:',
        choices: ['JSON', 'PDF']
    }]);

    const timestamp = dayjs().format('YYYY-MM-DD_HH-mm');
    const fileName = `resume_${timestamp}.${format.toLowerCase()}`;
    const fullPath = path.join(outputDir, fileName);

    if (format === 'JSON') {
        generateJSON(inputs, fullPath);
    } else {
        generatePDF(inputs, fullPath);
    }

    await uploadFileToServer(fullPath);
    console.log(`✅ Resume generated and uploaded: ${fullPath}`);
    process.exit(0);
}

// Interactive Resume
console.log("🧾 Resume Generator CLI");

const answers = {
    name: prompt("Enter Name: "),
    email: prompt("Enter Email: "),
    education: prompt("Enter Education: "),
    experience: prompt("Enter Experience: "),
    age: prompt("Enter Age: ")
};

if (!validateEmail(answers.email) || !validateAge(answers.age)) {
    console.log("❌ Invalid email or age.");
    process.exit(1);
}

const { format } = await inquirer.prompt([{
    type: 'list',
    name: 'format',
    message: 'Select output format:',
    choices: ['JSON', 'PDF']
}]);

const timestamp = dayjs().format('YYYY-MM-DD_HH-mm');
const fileName = `resume_${timestamp}.${format.toLowerCase()}`;
const filePath = path.join(outputDir, fileName);

if (format === 'JSON') {
    generateJSON(answers, filePath);
} else {
    generatePDF(answers, filePath);
}

await uploadFileToServer(filePath);
console.log(`✅ Resume generated and uploaded: ${filePath}`);
