const help = require('../data/helpMsgs.json');
exports.run = (client, message) => {
  if (message.author.id === "166304313004523520") {
        message.author.send(help.helpMsg1);
        setTimeout(() => {
          message.author.send(help.helpMsg2);
        }, 250);
        setTimeout(() => {
          message.author.send(help.helpMsg3);
       }, 500);
       message.channel.send(`**${message.author.username}**, olhe suas mensagens diretas!`)
      } else {
       message.author.send(help.helpMsg1);
       setTimeout(() => {
         message.author.send(help.helpMsg2);
       }, 250);
      message.channel.send(`**${message.author.username}**, olhe suas mensagens diretas!`)
    }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Mostra todos os comados que você pode usar.',
  usage: 'help [cmd]'
};
