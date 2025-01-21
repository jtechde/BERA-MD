module.exports = async (client, m, Owner, budy, fetchJson, store) => {
  const { proto } = require("@whiskeysockets/baileys");

  // Check if the message starts with '>'
  if (budy && budy.startsWith('>')) {
    // If the sender is not the owner
    if (m.sender !== Owner) {
      const menuText = `*Only Bera Or The Bot Owner Can use this Command*`;

      await client.sendMessage(m.chat, {
        text: menuText,
        contextInfo: {
          mentionedJid: [m.sender], // Mention the sender
          externalAdReply: {
            title: "Bera Md",
            body: "*Made with Love*",
            sourceUrl: "https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q",
            mediaType: 1,
            renderLargerThumbnail: false
          }
        }
      });
      return; // Stop further execution if not the owner
    }

    try {
      // Evaluate the command if the sender is the owner
      let evaled = await eval(budy.slice(2));

      // If the evaluated result is not a string, convert it to a string
      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

      // Send back the result of the evaluation
      await m.reply(evaled);
    } catch (err) {
      // If there's an error, send the error message
      await m.reply(String(err));
    }
  }
};
