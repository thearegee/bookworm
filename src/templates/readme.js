const bookmark = (date, label, description, children) => {
    return `
# ${label}
${addDescription(description)}
${children}
${addBookwormDescription(date)}
`
}

const bookmarkFolder = (index, label, description, children) => {
    return `
${convertNumberIntoHeader(index, label)}
${addDescription(description)}
${children}
    `
}


const convertNumberIntoHeader = (index, label) => {
    const arr = ['']
    for (let i = 0; i <= index; i++) {
        arr.push('#')
    }
    return `${arr.join('')} ${label}`
}


const bookmarkLink = (label, description, href) => {
    return `
* (${label})[${href}] - ${addDescription(description)}
`
}

const addDescription = (description) => {
    if (description) {
        return `${description}`
    } else {
        return ``
    }
}

const addBookwormDescription = (date) => {
    return `_These bookmarks were last updated on ${date} using [Bookworm](https://github.com/thearegee/bookworm)_`
}

module.exports = { bookmark, bookmarkFolder, bookmarkLink };