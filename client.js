const net = require('net');
var nicknames = require('nicknames');

module.exports = {
const clients = [];

const server = net.createServer(client => {
    const name =  nicknames.allRandom();
    client.setEncoding('utf-8');

    clients.push(client);

    client.on('data', message => {
        clients.forEach(c => {
            if(c === client) return;
            c.write(`${name}: ${message}`);
        });
    });

    client.on('close', () => {
        const index = clients.indexOf(client);
        if (index !== -1) clients.splice(index, 1);
        console.log(`client ${name} has disconnected`);
    });
});

};

module.esports = client;