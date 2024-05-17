// create-entity.js
import { createFiles } from '../utils/fileUtils.js';
import { capitalizeFirstLetter } from '../utils/stringUtils.js';

export function createEntityCommand(entityName) {
    console.log(`Creating entity: ${entityName}`);
    const entityFiles = [
        `./api/controllers/${entityName}Controller.js`,
        `./api/models/${entityName}Model.js`,
        `./api/routes/${entityName}Routes.js`,
    ];

    createFiles(entityFiles);
}

