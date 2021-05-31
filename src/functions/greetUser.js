const greetUser = function (guild, member) {
    let channel;
    channel = guild.channels.cache.find((ch) => ch.name === "new-members");
    if (!channel) {
        channel = guild.channels.cache.find((ch) => ch.name === "general");
    }
    if (!channel) return;
    console.log("channel is set");
    channel.send(`Welcome, ${member}`);
};

module.exports = greetUser;
