module.exports = async (client, m, Owner, budy, fetchJson, store) => {
  const { proto } = require("@whiskeysockets/baileys");

  // Check if the message starts with '>'
  if (budy && budy.startsWith('>')) {
    // If the sender is not the owner
    if (m.sender !== Owner) {
      const menuText = ``;

      await client.sendMessage(m.chat, {
        text: menuText,
        contextInfo: {
          mentionedJid: [m.sender], // Mention the sender
          externalAdReply: {
            title: "BERA TECH",
            body: "",
            
            
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
     const audioFiles = [
    
    'https://files.catbox.moe/tn32z0.m4a'
  ];

  // Randomly pick an audio file
  const vn = audioFiles[Math.floor(Math.random() * audioFiles.length)];
                   
