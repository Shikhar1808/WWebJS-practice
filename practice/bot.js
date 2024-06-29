const {initializeClient} = require('./client');
const {groupMessagesHandler} = require('./messageHandlers/groupMessageHandler');
const {privateMessagesHandler} = require('./messageHandlers/privateMessagesHandler');

async function start() {
    const client = await initializeClient();
    privateMessagesHandler(client);
    groupMessagesHandler(client);
}

start().catch(console.error);



