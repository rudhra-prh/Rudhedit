const ttt = require("google-tts-api");

module.exports = {
  name: "sayhindi",
  alias: ["speakhindi", "sayhi", "ttshi", "sayinhindi"],
  desc: "Say somethong using bot in Hindi accent.",
  usage: "sayhindi <text>",
  react: "👁️‍🗨️",
  category: "Essentials",
  start: async (Miku, m, { pushName, prefix, args, text, mime }) => {
    if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ""}`;
    } else if (args[0]) {
      message = args.join(" ");
    } else {
      message = `Mujhe bolne ke liye kuch text do ${pushName} senpai !`;
    }

    const texttospeechurl = ttt.getAudioUrl(message, {
      lang: "hi",
      slow: false,
      host: "https://translate.google.com",
    });

    Miku.sendMessage(
      m.from,
      { audio: { url: texttospeechurl }, mimetype: 'audio/mp4',
        ptt: true, },
      { quoted: m }
    ).catch((e) => {
      m.reply(`An error Occurd !`);
    });
  },
};
