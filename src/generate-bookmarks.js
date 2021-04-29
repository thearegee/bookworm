const got = require('got')
const yaml = require('js-yaml');
const { writeFileSync } = require('fs');
const generateImportBookmarkMarkup = require('./index.js');


const writeMarkupFiles = async (config) => {
    const { body } = await got(config);
    const bookmarks = generateImportBookmarkMarkup(yaml.load(body))

    console.log(bookmarks)

    console.log('Writing files')
    writeFileSync('./chrome.html', chrome)
    writeFileSync('./README.md', readme)
}

module.exports = writeMarkupFiles;
