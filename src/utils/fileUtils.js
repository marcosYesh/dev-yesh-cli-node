import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createFolders(folders) {
    Object.values(folders).forEach(folder => {
        const folderPath = path.join(__dirname, '..', '..', '..', '..', 'src', folder); // Voltando cinco pastas
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log(`Created folder: ${folder}`);
        } else {
            console.log(`Folder already exists: ${folder}`);
        }
    });
}

export function createFiles(files) {
    files.forEach(file => {
        const filePath = path.join(__dirname, '..', '..', '..', '..', 'src', file); // Voltando cinco pastas
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '', { flag: 'wx' });
            console.log(`Created file: ${file}`);
        } else {
            console.log(`File already exists: ${file}`);
        }
    });
}
