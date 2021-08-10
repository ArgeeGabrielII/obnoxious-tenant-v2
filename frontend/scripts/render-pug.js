'use strict';
const fs = require('fs');
const prettier = require('prettier');
const pug = require('pug');
const workerpool = require('workerpool');

function renderPug(filePath) {
    console.log(`### INFO: Rendering ${filePath}`);

    let html;
    try {
        html = pug.renderFile(filePath, {
            doctype: 'html',
            filename: filePath,
        });    
    } catch (error) {
        return console.error(error);
    }

    const prettified = prettier.format(html, {
        printWidth: 1000,
        tabWidth: 4,
        singleQuote: true,
        proseWrap: 'preserve',
        endOfLine: 'lf',
        parser: 'html'
    });

    fs.writeFileSync(filePath.replace(/\.pug$/, '.html'), prettified);
}

workerpool.worker({
    renderPug: renderPug,
});
