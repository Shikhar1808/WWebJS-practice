const fs = require('fs');

function appendToFile(filePath, text) {
    fs.appendFile(filePath, text, (err) => {
        if (err) {
            console.error('Failed to write to file:', err);
        }
    });
}

module.exports = { appendToFile };
