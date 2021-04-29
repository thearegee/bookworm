const yaml = require('js-yaml');
const { readFileSync } = require('fs');
const generateImportBookmarkMarkup = require('./index.mjs');

const loadConfigAsJson = () => {
    try {
        const bookmarks = yaml.safeLoad(readFileSync('./preview/config/bookmarks.yaml', 'utf8'));
        return bookmarks;
    } catch (e) {
        throw e
    }
};

const writeMarkupFiles = () => {
    const config = loadConfigAsJson();
    const bookmarks = generateImportBookmarkMarkup(config)

    console.log(bookmarks)
}

module.exports = writeMarkupFiles;
