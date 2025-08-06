import fs from 'fs';

export function generateJSON(data, filePath) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
