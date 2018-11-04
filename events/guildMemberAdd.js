const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = member => {
    const moment = require('moment');
    moment.locale('pt-BR');
let _c = client.channels.get("489929853362241566");
if(_c) return console.log("Canal com o ID <489929853362241566> não foi localizado.");
const moment = require('moment');
    moment.locale('pt-BR');
    let usuario = member
    let cor = 0x4286f4;       
    let statusmebro;
    if(usuario.presence.status === "dnd") statusmebro = "Não pertubar";
    if(usuario.presence.status === "idle") statusmebro = "Ausente";
    if(usuario.presence.status === "stream") statusmebro = "Transmitindo";
    if(usuario.presence.status === "offline") statusmebro = "Invisível";
    if(usuario.presence.status === "online") statusmebro = "Disponível";
    let userinfoembed = new Discord.RichEmbed()
      .setThumbnail(usuario.user.displayAvatarURL)
      .setTimestamp()
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .addField(`ℹInformações principais:`, `:white_small_square:Usuário: ${usuario.user.tag}\n:white_small_square:Id: ${usuario.user.id}\n:white_small_square:Status: ${statusmebro}\n:white_small_square:Jogando: ${usuario.user.presence.game ? usuario.user.presence.game.name : 'jogando nada no momento'}\n:white_small_square:Criada em: ${moment(usuario.createdAt).format("LLLL")}`)
      .addField(`📑Informações no servidor:`, `:white_small_square:Apelido: ${usuario.user.nickname || "sem apelido"}\n:white_small_square:Entrou: ${moment(usuario.user.joinedAt).format('LLLL')}\n:white_small_square:Cargos: ${usuario.roles.size || "sem cargos"}`)
      .setAuthor(`Informações do usuário: ${usuario.user.username}`, usuario.user.displayAvatarURL)
      .setColor(cor)
        _c.send("<@&455796553291005992>");
        _c.send(userinfoembed);
};
