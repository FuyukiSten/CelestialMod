const settings = require('../settings.json');
exports.run = (client, msg, args) => {
    if (!msg.guild.member(client.user).hasPermission("MANAGE_ROLES")) return msg.reply(":no_entry_sign: **Erro:** Eu não posso fazer isso!");
    if (!msg.member.hasPermission("MANAGE_ROLES")) return msg.reply(":no_entry_sign: **Erro:** Você não pode fazer isso !");
    if (msg.mentions.users.size === 0) return msg.reply(":no_entry_sign: Mencione um usuario.\nEx: `c!adicionarcargo @user Membros`");
    let member = msg.guild.member(msg.mentions.users.first());
    if (!member) return msg.reply(":no_entry_sign: **Erro:** Esse não é um usuario valido.");
    let name = msg.content.split(" ").splice(2).join(" ");
    let role = msg.guild.roles.find("name", name);
    if (!role) return msg.reply(`:no_entry_sign: **Error:** ${name} não é um cargo valido no servidor !`);
    let botRolePosition = msg.guild.member(client.user).highestRole.position;
    let rolePosition = role.position;
    if (botRolePosition <= rolePosition) return msg.channel.send(":no_entry_sign: **Erro:** Não posso dar um cargo mais alto que o meu.");
    member.addRole(role).catch(e => {
        return msg.channel.send(`:no_entry_sign: **Error:**\n${e}`);
    });
    msg.channel.send(`✔ **${msg.author.username}**, Eu dei o cargo **${name}** para o membro **${msg.mentions.users.first().username}**.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'addrole',
  description: 'Adiciona um cargo ao usuario mencionado.',
  usage: 'addrole <@user> <cargo>'
};
