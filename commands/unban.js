exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = client.channels.find('name', 'logs');
  if (!modlog) return message.reply('Não encontrie um canal de logs');
  if (reason.length < 1) return message.reply('Motivo ?');
  if (!user) return message.reply('Quem ? (Providencie um ID).').catch(console.error);
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'desbane o usuario.',
  usage: 'unban [id] [motiv]'
};
