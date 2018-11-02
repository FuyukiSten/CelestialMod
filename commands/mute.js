const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let logchannel = message.guild.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted/Cantinho da Vergonha');
  if (!logchannel) return message.reply('Não encontrei um canal de logs').catch(console.error);
  if (!muteRole) return message.reply('Não encontrei um cargo de silenciado').catch(console.error);
  if (reason.length < 1) return message.reply('Providencie um motivo.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Quem ?.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setTimestamp()
    .addField('Ação:', 'Un/Mute')
    .addField('Usuario punido:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderador:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Motivo', reason);
  message.channel.send(':white_check_mark: Successo !.')
  return client.channels.get(logchannel.id).send({embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.reply(':x: Eu não tenho permissão para fazer isso.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'mutes or unmutes a mentioned user',
  usage: 'un/mute [mention] [reason]'
};
