const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame("/도움말 을 입력하세요!")
});

client.on('message', msg => {
    if (msg.content === '/test') {
        msg.channel.send('test');
    }
});

client.login('TOKEN');