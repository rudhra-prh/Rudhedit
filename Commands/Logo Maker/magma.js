const maker = require('mumaker')

module.exports = {
    name: "magma",
    alias: ["mg"],
    desc: "Make text logo.",
    react: "🛡️",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}magma Atlas Bot*`);
        maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `ᴍᴀᴅᴇ ʙʏ ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}
