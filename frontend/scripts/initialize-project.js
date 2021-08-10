'use strict';

/*
This script is for initial project setup and should only be run once. 
Set the parameters in the config value below:
*/

const config = {
    newProjectName: 'my-new-project',
    newVersion: '1.0.0',
    newPrefix: 'mnp',
}

/*
and then run this command in the root of this project from the terminal:

    node scripts/initialize-project.js
*/

const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(path.dirname(__filename), '../');

const angularJSONPath = path.join(rootPath, 'angular.json');
const packageJSONPath = path.join(rootPath, 'package.json');
const packageLockJSONPath = path.join(rootPath, 'package-lock.json');
const tslintJSONPath = path.join(rootPath, 'tslint.json');

const dockerfilePath = path.join(rootPath, 'Dockerfile');

const angularJSON = require(angularJSONPath);
const packageJSON = require(packageJSONPath);
const packageLockJSON = require(packageLockJSONPath);
const tslintJSON = require(tslintJSONPath);

let dockerfile = fs.readFileSync(dockerfilePath, { encoding: 'utf8' });

const CURRENT_PROJECT_NAME = 'sb-admin-pro-angular';
const iniRegEx = new RegExp(CURRENT_PROJECT_NAME, 'g');

angularJSON.projects[CURRENT_PROJECT_NAME].prefix = `${config.newPrefix}`;
angularJSON.projects[CURRENT_PROJECT_NAME].architect.build.options.outputPath = `dist/${config.newProjectName}`;
angularJSON.projects[CURRENT_PROJECT_NAME].architect.serve.options.browserTarget = `${config.newProjectName}:build`;
angularJSON.projects[CURRENT_PROJECT_NAME].architect.serve.configurations.production.browserTarget = `${config.newProjectName}:build:production`;
angularJSON.projects[CURRENT_PROJECT_NAME].architect['extract-i18n'].options.browserTarget = `${config.newProjectName}:build`;
angularJSON.projects[CURRENT_PROJECT_NAME].architect.e2e.options.devServerTarget = `${config.newProjectName}:serve`;
angularJSON.projects[CURRENT_PROJECT_NAME].architect.e2e.configurations.production.devServerTarget = `${config.newProjectName}:serve:production`;
angularJSON.defaultProject = `${config.newProjectName}`;

angularJSON.projects[config.newProjectName] = angularJSON.projects[CURRENT_PROJECT_NAME];
delete angularJSON.projects[CURRENT_PROJECT_NAME];

packageJSON.name = config.newProjectName;
packageJSON.version = config.newVersion;
packageJSON.scripts['bundle-report'] = `webpack-bundle-analyzer dist/${config.newProjectName}/stats.json`;
packageJSON.scripts['serve'] = `static-server dist/${config.newProjectName}`;
packageJSON.scripts['serve:coverage'] = `static-server ./coverage/${config.newProjectName} 9753`;

packageLockJSON.name = config.newProjectName;
packageLockJSON.version = config.newVersion;


tslintJSON.rules['component-selector'] = [
    true,
    'element',
    [
        'app',
        'sb',
        'sbpro',
        config.newPrefix
    ],
    'kebab-case'
]

tslintJSON.rules['directive-selector'] = [
    true,
    'attribute',
    [
        'app',
        'sb',
        'sbpro',
        config.newPrefix
    ],
    'camelCase'
]

dockerfile = dockerfile.replace(iniRegEx, config.newProjectName);

let packageJSONString = JSON.stringify(packageJSON, null, 4);

packageJSONString = packageJSONString.replace(iniRegEx, config.newProjectName);

fs.writeFileSync(
    angularJSONPath,
    JSON.stringify(angularJSON, null, 4)
);

fs.writeFileSync(
    packageJSONPath,
    packageJSONString
);

fs.writeFileSync(
    packageLockJSONPath,
    JSON.stringify(packageLockJSON, null, 4)
);

fs.writeFileSync(
    tslintJSONPath,
    JSON.stringify(tslintJSON, null, 4)
);

fs.writeFileSync(
    dockerfilePath,
    dockerfile
);


console.log('### INFO: Done');
