// index.js
import config from '../config/index.js'; // Importa as configurações do arquivo JavaScript
import { initCommand } from './commands/init.js';
import { createEntityCommand } from './commands/create-entity.js';
import { createComponentCommand } from './commands/create-component.js';
import { displayHelp } from './commands/help.js';

const [, , command, ...args] = process.argv;

switch (command) {
    case 'init':
        // Extrai as configurações diretamente do objeto config
        const foldersData = config.folders;
        const filesData = config.files;

        initCommand(foldersData, filesData);
        break;
    case 'create-entity':
        createEntityCommand(args[0]);
        break;
    case 'create-component':
        createComponentCommand(args[0], args[1]);
        break;
    case 'help':
        // Extrai as configurações diretamente do objeto config
        const foldersDataHelp = config.folders;
        displayHelp(foldersDataHelp);
        break;
    default:
        console.log('Invalid command. Use "help" for usage information.');
        const foldersDataHelpNoparameter = config.folders;
        displayHelp(foldersDataHelpNoparameter);
        break;
}
