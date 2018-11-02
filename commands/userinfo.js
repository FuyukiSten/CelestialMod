const moment = require('moment');
const Discord = require('discord.js');
exports.run = (client, msg, args) => {
  const embed = new Discord.RichEmbed();
  embed.addField("Usuário", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("ID", `${msg.author.id}`, true)
          .setColor(3447003)
          .setFooter(' ', ' ')
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('Atualmente', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('Jogo', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('Entrou no discord em', `${moment(msg.author.createdAt).format('MM.DD.YY')}`, true)
          .addField('Entrou no servidor em', `${moment(msg.member.joinedAt).format('MM.DD.YY')}`, true)
          .addField('Cargos', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('É um bot', `${msg.author.bot.toString().toUpperCase()}`, true)
      msg.channel.sendEmbed(
          embed, {
              disableEveryone: true
          }
      );
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Informações sobre o usuario mencionado.',
  usage: 'userinfo <@user>'
};
