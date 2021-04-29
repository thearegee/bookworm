const core = require('@actions/core');
const generateBookmarks = require('./src/generate-bookmarks')


// most @actions toolkit packages have async methods
async function run() {
    try {
        const config = core.getInput('config');
        generateBookmarks(config)
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
