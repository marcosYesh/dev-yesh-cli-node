// init.js
import { createFolders, createFiles } from '../utils/fileUtils.js';

export function initCommand(foldersConfig, filesConfig) {
    try {
        // Criação das pastas e arquivos com base nos dados fornecidos
        createFolders(foldersConfig);
        createFiles(filesConfig);

        console.log('Initialized project structure.');
    } catch (error) {
        console.error('Error initializing project structure:', error);
    }
}
