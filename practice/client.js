const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

async function initializeClient() {
    const client = new Client({
        authStrategy: new LocalAuth(),
        puppeteer: {
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
    });

    client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true });
        console.log('QR RECEIVED', qr);
    });

    client.on('ready', () => {
        console.log('Client is ready!');

    });

    client.on('disconnected', (reason) => {
        console.log('Client was logged out', reason);
    });

    client.initialize();
    return client;
}

module.exports = {initializeClient};
