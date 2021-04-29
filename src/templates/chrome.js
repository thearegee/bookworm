const bookmark = (time, label, description, children) => {
    return `
    ${addBookwormDescription()}
    <!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
        It will be read and overwritten.
        DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
${addDescription(description)}
<DL><p>
<DT><H3 ADD_DATE="${time}" LAST_MODIFIED="${time}">${label}</H3>
<DL><p>
    ${children}
</DL><p>
</DL><p>
    `
}

const bookmarkFolder = (time, label, description, children) => {
    return `
            ${addDescription(description)}
            <DT><H3 ADD_DATE="${time}" LAST_MODIFIED="${time}">${label}</H3>
<DL><p>
${children}
</DL><p>
    `
}


const bookmarkLink = (time, label, description, href) => {
    return `
    ${addDescription(description)}
    <DT><A HREF="${href}" ADD_DATE="${time}">${label}</A>
    `
}

const addDescription = (description) => {
    if (description) {
        return `<!-- ${description} -->`
    } else {
        return ``
    }
}

const addBookwormDescription = (date) => {
    return `<!-- These bookmarks were last updated ${date} using Bookworm (https://github.com/thearegee/bookworm) -->`
}

export { bookmark, bookmarkFolder, bookmarkLink }