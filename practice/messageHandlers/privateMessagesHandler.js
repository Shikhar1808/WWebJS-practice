const { MessageMedia } = require('whatsapp-web.js');

const dotenv = require('dotenv').config();

const targetNumber = process.env.TARGET_NUMBER;
const myNumber = process.env.MY_NUMBER;
function privateMessagesHandler(client){
    client.on('message', async message => {
        const contact = await message.getContact();
        const senderNumber = message.from.split('@')[0];
        const senderName = contact.pushname || contact.verifiedName || contact.formattedName;
        console.log(`Message from ${senderName} (${senderNumber}): ${message.body}`);
        if (contact.isMyContact) {
            if (message.body.toLowerCase().includes('hello')) {
                message.reply('Hi there!');
            }
        }
        if (message.from === `91${targetNumber}@c.us`) {
            if(message.body === '!send-media'){
                const media = MessageMedia.fromFilePath('./public/images/1.jpeg');
                await client.sendMessage(message.from, media, {sendMediaAsSticker: true})
            }
        }
        if (message.from === `91${myNumber}@c.us`){
            message.reply('Hello, I am a bot. I am currently under development. Please do not disturb me.');
        }
    });
}

module.exports = {privateMessagesHandler};