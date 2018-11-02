const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let logchannel = message.guild.channels.find('name', 'logs');
  if (!logchannel) return message.reply('I cannot find a logs channel');
  if (!message.member.hasPermission("BAN_MEMBERS")) return msg.reply(":no_entry_sign: **Error:** You don't have the **Ban Members** permission!");
  if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply(`<:redTick:${settings.redTick}> I cannot ban that member`);
  message.guild.member(user).ban();

  const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('Ação:', 'Banimento')
    .addField('Membro punido:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderador:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Motivo', reason);
    message.channel.send(`<:hammer:${settings.hammer}> **BAN**! O usuario foi banido.`)
  return client.channels.get(logchannel.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Bane o usuario mencionado.',
  usage: 'ban [@user] [motivo]'
};
