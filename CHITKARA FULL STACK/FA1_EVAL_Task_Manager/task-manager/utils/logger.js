const chalk = require('chalk');

function log(message, type = "info") {
    const timestamp = new Date().toISOString();

    let formattedMessage;
    switch (type.toLowerCase()) {
        case "error":
            formattedMessage = chalk.red(`[ERROR - ${timestamp}]: ${message}`);
            break;
        case "warn":
            formattedMessage = chalk.yellow(`[WARN - ${timestamp}]: ${message}`);
            break;
        case "success":
            formattedMessage = chalk.green(`[SUCCESS - ${timestamp}]: ${message}`);
            break;
        case "info":
        default:
            formattedMessage = chalk.blue(`[INFO - ${timestamp}]: ${message}`);
            break;
    }

    console.log(formattedMessage);
}

module.exports = { log };
