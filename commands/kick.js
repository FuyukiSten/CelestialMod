const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let logchannel = message.guild.channels.find('name', 'logs');
  if (!logchannel) return message.reply('Não consigo encontrar um canal com o nome `logs`');
  if (reason.length < 1) return message.reply('Motivo ?.');
  if (message.mentions.users.size < 1) return message.reply('Mencione alguém valido.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('Não posso fazer isso...');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .addField('Açaõ:', 'Expulsar')
    .addField('Usuario punido:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderador:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Motivo', reason);
  message.channel.send(':white_check_mark: Sucesso!.')
  return client.channels.get(logchannel.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Expulsa o usuario mencionado.',
  usage: 'kick [menção] [usuario]'
};
