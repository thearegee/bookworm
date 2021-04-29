const core = require('@actions/core');


// most @actions toolkit packages have async methods
async function run() {
    try {
        const name = core.getInput('test');
        console.log(`Hello ${name}!`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
