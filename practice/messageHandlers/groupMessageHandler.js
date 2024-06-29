const path = require('path');
const { appendToFile } = require('../utils/logger');

function groupMessagesHandler(client) {
    client.on('message', async (message) => {
        if (message.from.endsWith('@g.us')) {
            const group = await message.getChat();
            const contact = await message.getContact();
            const senderNumber = message.from.split('@')[0];
            const senderName = contact.pushname || contact.verifiedName || contact.formattedName;
            console.log(`Group Message from ${group.name} by ${senderName} (${senderNumber}) : ${message.body}`);
        }
    });
}

module.exports = { groupMessagesHandler };
