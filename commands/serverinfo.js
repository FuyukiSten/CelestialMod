const Discord = require('discord.js');
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed();
  let verifLevels = ["Nenhum", "Baixo", "Medio", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
      let region = {
          "brazil": "Brazil",
          "eu-central": "Central Europe",
          "singapore": "Singapore",
          "us-central": "U.S. Central",
          "sydney": "Sydney",
          "us-east": "U.S. East",
          "us-south": "U.S. South",
          "us-west": "U.S. West",
          "eu-west": "Western Europe",
          "vip-us-east": "VIP U.S. East",
          "london": "London",
          "amsterdam": "Amsterdam",
          "hongkong": "Hong Kong"
      };

      var emojis;
      if (message.guild.emojis.size === 0) {
          emojis = 'None';
      } else {
          emojis = message.channel.guild.emojis.map(e => e).join(" ");
      }
  embed.setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
  .setThumbnail(message.guild.iconURL ? message.guild.iconURL : me.user.displayAvatarURL)
  .addField("Criado em", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
  .addField("ID", message.guild.id, true)
  .addField("Dono", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("Região", region[message.guild.region], true)
  .addField("Membros", message.guild.memberCount, true)
  .addField("Cargos", message.guild.roles.size, true)
  .addField("Canais", message.guild.channels.size, true)
  .addField("Emojis", emojis, true)
  .addField("Nivel de verificação", verifLevels[message.guild.verificationLevel], true)
  .addField("Canal padrão", message.guild.defaultChannel, true)
  .setColor(3447003)
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'informações sobre o servidor.',
  usage: 'serverinfo'
};
