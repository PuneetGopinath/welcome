const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", (member) => {
    member.guild.channels.get('channelID').send("Welcome");
});

client.login(config.BOT_TOKEN);
