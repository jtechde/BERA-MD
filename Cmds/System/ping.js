module.exports = async (context) => {
    const { client, m, Beraspeed } = context;

    try {
        // Prepare the response text with speed data
        const menuText = `Bera speed\n${Beraspeed.toFixed(4)}𝐌\𝐒`;

        // Send message with contextInfo and mention the sender
        await client.sendMessage(m.chat, {
            text: menuText,
            contextInfo: {
                mentionedJid: [m.sender], // Mention the sender
                externalAdReply: {
                    title: "🌟 BERA MD ✨",
                    body: "regards Bruce Bera",
                    sourceUrl: "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        });
    } catch (error) {
        console.error("Error sending message:", error);
        m.reply('An error occurred while sending the menu.');
    }
};
