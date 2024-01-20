const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Yea, you guess it. It's just reply pong! (with latency)"),
	run: async ({ client, interaction }) => { //for a reason, i have to throw 2 input to this
        const sent = await interaction.editReply({ content: '⌛⌛⌛ Pinging . . . . .', fetchReply: true });
        await interaction.editReply(`🏓 Pong!
        \n:stopwatch: Uptime: ${Math.round(interaction.client.uptime / 60000)} minutes
        \n:sparkling_heart: Websocket heartbeat: ${interaction.client.ws.ping}ms.
        \n:round_pushpin: Rountrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
    },
};