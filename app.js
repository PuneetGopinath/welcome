const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!w ";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`Watching ${client.guilds.cache.size} servers`);
});

client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.find(
        (ch) => ch.name === "welcome"
    );
    if (!channel) return;
    channel.send(`Welcome, ${member}`);
});

client.on("message", function (message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(" ");
    const command = args.shift().toLowerCase();
    if (command === "ping") {
        message.reply(`Pong!`);
    }
});

client.login(config.BOT_TOKEN);
