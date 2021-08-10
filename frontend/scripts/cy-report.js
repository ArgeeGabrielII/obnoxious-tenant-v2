'use strict';
const sh = require('shelljs');

sh.exec('rm -rf cypress/reports;');
sh.exec('./node_modules/.bin/cypress run');
sh.exec('./node_modules/.bin/mochawesome-merge cypress/reports/mocha/* > cypress/reports/mocha/index.json');
sh.exec('node_modules/mochawesome-report-generator/bin/cli.js -o cypress/reports/html cypress/reports/mocha/index.json');
