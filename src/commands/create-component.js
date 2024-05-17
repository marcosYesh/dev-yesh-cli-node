// create-component.js
import { createFiles } from '../utils/fileUtils.js';
import { capitalizeFirstLetter } from '../utils/stringUtils.js';

export function createComponentCommand(entityName, componentType) {
    const folders = {
        'controllers': '/api/controllers',
        'models': '/api/models',
        'services': '/api/services',
        'validators': '/api/validators',
        'middleware': '/api/middleware',
        'routes': '/api/routes'
    };

    if (!folders[componentType]) {
        console.error(`Invalid component type: ${componentType}`);
        process.exit(1);
    }

    console.log(`Creating ${componentType} for entity ${entityName}`);
    const filePath = `./${folders[componentType]}/${entityName}${capitalizeFirstLetter(componentType)}.js`;
    createFiles([filePath]);
}