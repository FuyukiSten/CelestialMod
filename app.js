const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Lendo um total de ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Carregando comando: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.on("guildMemberAdd", member => {
    const moment = require('moment');
    moment.locale('pt-BR');
let _c = client.channels.get("489929853362241566");
if(!_c) return console.log("Canal com o ID <489929853362241566> não foi localizado.");
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
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let mod_role = message.guild.roles.find('name', settings.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find('name', settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  let overlord_role = message.guild.roles.find('name', settings.overlordrolename)
  if (overlord_role && message.member.roles.has(overlord_role.id)) permlvl = 4;
  if (message.author.id === settings.ownerid) permlvl = 5;
  return permlvl;
};


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });


client.login(settings.token);
