const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("เออออ...ก็ปิงโง่ๆอะ บอก Latency ด้วยฮ๊าฟ"),
	run: async ({ client, interaction }) => { //for a reason, i have to throw 2 input to this
        const sent = await interaction.editReply({ content: '⌛⌛⌛ Pinging . . . . .', fetchReply: true });
        await interaction.editReply(`🏓 Pong!
        \n:stopwatch: ตอนนี้บอทเปิดมาแล้ว : ${Math.round(interaction.client.uptime / 60000)} นาที
        \n:sparkling_heart: Websockets heartbeat: ${interaction.client.ws.ping}ms.
        \n:round_pushpin: Ping time: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
    },
};

//กูก๊อปเขามาอีกที:skull: