exports.run = (client, msg, args) => {
    let avatar = msg.mentions.users.size ? msg.mentions.users.first().avatarURL : msg.author.avatarURL;
    if (msg.mentions.users.size > 0) {
        msg.channel.send(`Avatar do usuario, **${msg.mentions.users.first().username}:**\n${avatar}`);
    } else {
      msg.channel.send(`Avatar do usuario, **${msg.author.username}:**\n${avatar}`);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Obtem o avatar do usuario mencionado.',
  usage: 'avatar <@user>'
};
