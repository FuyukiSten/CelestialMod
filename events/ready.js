const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = client => {
  console.log(chalk.bgGreen.black(`Online.`));
};
