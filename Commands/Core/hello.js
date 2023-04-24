module.exports = {
    name: "hi",
    alias: ["hello","alive","info"],
    desc: "Say hello to bot.",
    react: "👋",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());
        m.reply(`\n        *ʜᴇʏ👋* *${pushName}* \n    ɪ ᴀᴍ *${botName}* ʙᴏᴛ.\n\n*⿻*   _Server Uptime:_*${uptime()}*\n*⿻*   _Status:_ *Operational*\n╭─────────────────»\n│        *ɪꜰ ʏᴏᴜ ɴᴇᴇᴅ ʜᴇʟᴘ*\n│       *ᴛʏᴘᴇ* 💬 *${prefix}help* *${prefix}menu*\n│               *ᴛʜᴀɴᴋ ʏᴏᴜ*\n╰─────────────────»\n`)
        let buttons = [
        {buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1}
        ]
        let buttonMessage = {
        image: {url:botImage1},
        jpegThumbnail: log0,
        caption: teks,
        footer: `${botName}`,
        buttons: buttons,
        headerType: 4,
        contextInfo:{externalAdReply:{
        title:"I deserve something for my hardwork",
        body: "Click to donate", 
        thumbnail: fs.readFileSync("Media/Img/BG.jpg"),
        mediaType:1,
        mediaUrl: 'https://i.imgur.com/XQFNJDp.jpeg',
        sourceUrl: "https://instagram.com/princerudh"
        }}
        }
        Miku.sendMessage(m.from, buttonMessage, { quoted: m })
            }
}
