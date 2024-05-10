// help.js
export function displayHelp(folders) {
    console.log('Usage with node:');
    console.log('node src/index.js init - Initialize project structure');
    console.log('node src/index.js create-entity [entityName] - Create files for a new entity');
    console.log('node src/index.js create-component [entityName] [componentType] - Create specific component for an entity');
    console.log('node src/index.js help - Display this help message');
    console.log('\nUsage with npm:');
    console.log('npm run start - Initialize project structure');
    console.log('npm run create-entity [entityName] - Create files for a new entity');
    console.log('npm run create-component [entityName] [componentType] - Create specific component for an entity');
    console.log('npm run help - Display this help message');
    console.log('\nAvailable component types:');
    if (folders && typeof folders === 'object') {
        Object.keys(folders).forEach(key => {
            console.log(`- ${key}`);
        });
    } else {
        console.log('No component types available.');
    }
}
