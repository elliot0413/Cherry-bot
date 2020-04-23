const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === 'on') {
    let embed = new Discord.RichEmbed()
      .addField('서버ON',
        '<@everyone> \n' +
        ':sparkling_heart:서버 ON~ :sparkling_heart: \n' +
        ':lock: 서버리스트에서 찾아서 들어와주세요!\n' +
        ':lock: 기다려주셔서 감사합니다!\n' +
        ':lock: 서버REBOOT 중일때는 들어오지말아주세요!')
      .setTimestamp()
      .setFooter('수기#2318가 만듬')
      message.delete();
    message.channel.send(embed)
  }
  if(message.content === 'off') {
    let embed = new Discord.RichEmbed()
      .addField('서버OFF',
      "<@everyone>\n" +
      ":star2:서버 OFF:star2:\n" +
      ":rainbow: 지금서버의 상태는 'OFF' 입니다!\n" +
      ":rainbow: 금방 서버를 다시 ON시키겟습니다!\n" +
      ":rainbow: 서버REBOOT 중일때는 들어오지말아주세요!")
      .setTimestamp()
      .setFooter('수기#2318가 만듬')
      message.delete();
    message.channel.send(embed)
  }
  if(message.content === 're') {
    let embed = new Discord.RichEmbed()
      .addField('서버REBOOT',
      "<@everyone>\n" +
      ":pushpin:서버 REBOOT:pushpin:\n" +
      ":mag_right: 지금서버의 상태는 'REBOOT' 입니다!\n" +
      ":mag_right: 금방 서버를 다시 ON시키겟습니다!\n" +
      ":mag_right: 서버REBOOT 중일때는 들어오지말아주세요!")
      .setTimestamp()
      .setFooter('수기#2318가 만듬')
      message.delete();
    message.channel.send(embed)
  }
});

client.login(process.env.token);
