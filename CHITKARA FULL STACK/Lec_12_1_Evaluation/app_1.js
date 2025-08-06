const fs = require('fs').promises;
async function readFile() {
    try {
        const data = await fs.readFile('example.txt', 'utf-8')
        console.log("File Content:", data);        
    } catch (error) {
        console.error("Error reading file:", error);        
    }
}

readFile()