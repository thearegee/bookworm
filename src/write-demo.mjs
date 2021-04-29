import yaml from 'js-yaml';
import { readFileSync, writeFileSync } from 'fs';
import generateImportBookmarkMarkup from './index.js'

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
    const { chrome, readme } = generateImportBookmarkMarkup(config)

    console.log('Writing Bookmarks')
    writeFileSync('./preview/chrome.html', chrome)
    writeFileSync('./preview/README.md', readme)

}

writeMarkupFiles();