const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame("/도움말 을 입력하세요!");
});

client.on('message', msg => {

    let messageArray = msg.content.split(" ");
    let args = messageArray.slice[1];

    if (msg.content === '/도움말') {
        embed = new Discord.RichEmbed()
            .setColor("#0022ff")
            .setTitle("도움말")
            .addField("깃허브", "[깃허브 org](https://github.com/teamdiscordbotdevelopers)")
            .addField("명령어", "/도움말\n/아바타\n/내정보")
        msg.channel.send(embed);
    }
    if (msg.content === '/아바타') {
        msg.channel.send(msg.author.avatarURL + "\n당신의 아바타 입니다.");
    }

    if (msg.content === '/내정보') {
        embed = new Discord.RichEmbed()
            .setTitle("내 정보")
            .setColor("#ce6bdb")
            .addField("사용자 이름", msg.author.username)
            .addField("닉네임", msg.member.nickname)
            .addField("전체 사용자 이름", msg.author.tag)
            .addField("계정이 만들어진 날", msg.author.createdAt)
            .addField("이 유저가 이 서버에 온 날", msg.member.joinedAt)
            .setThumbnail(msg.author.avatarURL)
        msg.channel.send(embed)
    }
});

client.login('TOKEN');