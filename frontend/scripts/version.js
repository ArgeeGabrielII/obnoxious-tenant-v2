'use strict';

const fs = require('fs');
const upath = require('upath');
const pjPath = upath.resolve(upath.dirname(__filename), '../package.json');
const versionPath = upath.resolve(upath.dirname(__filename), '../version');
const angularJSON = require('../angular.json');
const distVersionPath = upath.resolve(upath.dirname(__filename), `../dist/${angularJSON.defaultProject}/assets/version`);


const pj = require(pjPath);

console.log(`### INFO: Current Version: ${pj.version}`);
fs.writeFileSync(versionPath, pj.version);
fs.writeFileSync(distVersionPath, pj.version);

module.exports = pj.version;