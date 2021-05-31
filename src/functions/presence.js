const presence = function () {
    const servers = client.guilds.cache.size;
    console.log(`Updating presence. Servers: ${servers}`);
    client.user
        .setPresence({
            activity: {
                name: `${servers} server${servers > 1 ? "s" : ""}`,
                type: "WATCHING",
            },
        })
        .catch((error) => console.error(error));
};
module.exports = presence;
