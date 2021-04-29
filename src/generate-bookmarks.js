const got = require('got')
const yaml = require('js-yaml');
const generateImportBookmarkMarkup = require('./index.js');


const writeMarkupFiles = async (config) => {
    const { body } = await got(config);
    // console.log(body)
    const bookmarks = generateImportBookmarkMarkup(yaml.load(body))

    console.log(bookmarks)
}

module.exports = writeMarkupFiles;
