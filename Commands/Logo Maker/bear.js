const maker = require('mumaker')

module.exports = {
    name: "bear",
    alias: ["bearstyle","bearlogo"],
    desc: "Make text logo.",
    react: "🛡️",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text.includes("|")) return m.reply(`Example: *${prefix}bear Atlas Bot | Team Atlas*`);
        teks1 = text.split("|")[0]
        teks2 = text.split("|")[1]
        maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `ᴍᴀᴅᴇ ʙʏ ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}
