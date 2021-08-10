const version = require('../version.js');
const angularJSON = require('../../angular.json');
const sh = require('shelljs');

const imageName = angularJSON.defaultProject;

sh.exec(`docker build -t ${imageName}:latest -t ${imageName}:${version} .`);

