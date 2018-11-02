exports.run = (client, message) => {
  message.channel.send('Ping?').then(m => m.edit(`Pong !: ${message.createdTimestamp - m.createdTimestamp}ms. API: ${Math.round(client.ping)}ms.`))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong',
  usage: 'ping'
};
