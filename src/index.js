
const chrome = require('./templates/chrome.js')
const readme = require('./templates/readme.js')

const generateImportBookmarkMarkup = (config) => {
    return {
        chrome: chrome.bookmark(generateTimeStamp(), config.label, config.description, traverseStructure(config, 'chrome')),
        readme: readme.bookmark(generateTimeStamp(), config.label, config.description, traverseStructure(config, 'readme'))
    }
}

const traverseStructure = ({ bookmarks, folders }, type) => {
    const arr = [];
    if (bookmarks) {
        arr.push(traverseBookmarks(bookmarks, type))
    }
    if (folders) {
        arr.push(traverseFolders(folders, type))
    }
    return arr.join('')
}

const traverseFolders = (folders, type) => {
    const arr = [];
    folders.forEach((folder) => {
        const children = traverseStructure(folder, type);
        // need fix the depth of folder headings
        arr.push(generateBookmarkFolderMarkup(1, folder.label, folder.description, children, type))
    })
    return arr.join('');
}

const traverseBookmarks = (bookmarks, type) => {
    const arr = [];
    bookmarks.forEach((bookmark) => {
        arr.push(generateBookmarkLinkMarkup(bookmark, type))
    })
    return arr.join('');
}

const generateBookmarkFolderMarkup = (index, label, description, children, type) => {
    switch (type) {
        case 'chrome':
            return chrome.bookmarkFolder(generateTimeStamp(), label, description, children)
        case 'readme':
            return readme.bookmarkFolder(index, label, description, children)
    }
}

const generateBookmarkLinkMarkup = (bookmark, type) => {
    switch (type) {
        case 'chrome':
            return chrome.bookmarkLink(generateTimeStamp(), bookmark.label, bookmark.description, bookmark.href)
        case 'readme':
            return readme.bookmarkLink(bookmark.label, bookmark.description, bookmark.href)
    }
}


const generateTimeStamp = () => {
    return Math.round(Date.now() / 1000)
}

module.exports = generateImportBookmarkMarkup;