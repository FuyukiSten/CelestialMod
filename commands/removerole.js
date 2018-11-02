const settings = require('../settings.json');
exports.run = (client, msg, args) => {
    if (!msg.guild.member(client.user).hasPermission("MANAGE_ROLES")) return msg.reply(":no_entry_sign: **Erro:** Não dá pra eu fazer isso po!");
    if (!msg.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return msg.reply(":no_entry_sign: **Erro:** Você não pode usar isso!");
    if (msg.mentions.users.size === 0) return msg.reply(":no_entry_sign: Mencione alguém ai po.");
    let member = msg.guild.member(msg.mentions.users.first());
    if (!member) return msg.reply(":no_entry_sign: **Erro:** Esse usuario não existe.");
    let name = msg.content.split(" ").splice(2).join(" ");
    let role = msg.guild.roles.find("name", name);
    member.removeRole(role).catch(e => {
        msg.channel.send(":no_entry_sign: Houve um erro !!");
    });
    msg.channel.send(`<:greenTick:${settings.check}> **${msg.author.username}**, I've removed the **${name}** role from **${msg.mentions.users.first().username}**.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'removerole',
  description: 'Remove um cargo.',
  usage: 'removerole'
};
