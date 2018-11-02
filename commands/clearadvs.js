const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Não.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Quem >//< ?");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Não.");
	let reason = args.slice(1).join(" ");


  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns = 0;
  message.reply("Ação realiazada com sucesso");

  
module.exports.help = {
  name: "adv"
}
