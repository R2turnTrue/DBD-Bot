const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '/도움말') {
        msg.channel.send('도움말을 쳤습니닷.');
    }
});

client.login('TOKEN');