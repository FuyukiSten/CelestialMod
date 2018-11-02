exports.run = (client, message, args) => {
    if (!args[0]) return;
    if (args[0] === "bug") return message.reply("Por favor explique melhor isso");
    args = args.join(" ");
    message.reply("Obrigado por informar!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) Reportou:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nNo servidor: **${message.guild.name}**\nID do servidor: **${message.guild.id}**`;
    client.users.get('505096421532368907').send(`${content}`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Reporta um bug.',
  usage: 'bug <bug>'
};
