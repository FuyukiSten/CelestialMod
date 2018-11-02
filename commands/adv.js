const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Não.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Quem >//< ?");
  if(!wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Não.");
	let reason = args.slice(1).join(" ");


  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Adv")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Usuario", `<@${wUser.id}>`)
  .addField("Canal", message.channel)
  .addField("Total de advs", warns[wUser.id].warns)
  .addField("Motivo", reason);

  let warnchannel = message.guild.channels.find(`name`, "advs-log");
  if(!warnchannel) return message.reply("Crie um canal com o nome advs-log antes de usar isso.");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 1){
    let muterole = message.guild.roles.find(`name`, "Muted/Cantinho da Vergonha");
    if(!muterole) return message.reply("Cargo não encontrado");

    await(wUser.addRole(muterole.id));


    setTimeout(function(){
      wUser.removeRole(muterole.id)
    }, 900000)
  }
  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "Muted/Cantinho da Vergonha");
    if(!muterole) return message.reply("Cargo não encontrado");

    await(wUser.addRole(muterole.id));


    setTimeout(function(){
      wUser.removeRole(muterole.id)
    }, 1000 * 10800)
  }
  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "Muted/Cantinho da Vergonha");
    if(!muterole) return message.reply("Cargo não encontrado");

    await(wUser.addRole(muterole.id));


    setTimeout(function(){
      wUser.removeRole(muterole.id)
    }, 1000 * 21600)
  }
  if(warns[wUser.id].warns == 4){
    let muterole = message.guild.roles.find(`name`, "Muted/Cantinho da Vergonha");
    if(!muterole) return message.reply("Cargo não encontrado");

    await(wUser.addRole(muterole.id));


    setTimeout(function(){
      wUser.removeRole(muterole.id)
    }, 1000 * 32400)
  }
  if(warns[wUser.id].warns == 5){
    let muterole = message.guild.roles.find(`name`, "Muted/Cantinho da Vergonha");
    if(!muterole) return message.reply("Cargo não encontrado");

    await(wUser.addRole(muterole.id));


    setTimeout(function(){
      wUser.removeRole(muterole.id)
    }, 1000 * 86400)
  }
  if(warns[wUser.id].warns == 6){
    let muterole = message.guild.roles.find(`name`, "Muted/Cantinho da Vergonha");
    if(!muterole) return message.reply("Cargo não encontrado");

    await(wUser.addRole(muterole.id));


    setTimeout(function(){
      wUser.removeRole(muterole.id)
    }, 1000 * 172800)
  }
  if(warns[wUser.id].warns == 7){
    let muterole = message.guild.roles.find(`name`, "Muted/Cantinho da Vergonha");
    if(!muterole) return message.reply("Cargo não encontrado");

    await(wUser.addRole(muterole.id));


    setTimeout(function(){
      wUser.removeRole(muterole.id)
    }, 1000 * 259200)
  }
  if(warns[wUser.id].warns == 8){
    await(wUser.ban("ooo"));
  }
}

module.exports.help = {
  name: "adv"
}
