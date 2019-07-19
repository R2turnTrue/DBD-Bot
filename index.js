const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame("/도움말 을 입력하세요!")
});

client.on('message', msg => {
    if (msg.content === '/도움말') {
        embed = new Discord.RichEmbed()
            .setColor("#0022ff")
            .setTitle("도움말")
            .addField("깃허브", "[깃허브 org](https://github.com/teamdiscordbotdevelopers)")
            .addField("명령어", "/도움말")
        msg.channel.send(embed);
    }
});

client.login('TOKEN');