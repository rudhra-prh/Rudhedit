module.exports = {
  name: "tagall",
  alias: ["taga", "all"],
  desc: "Tag all group member",
  category: "Group",
  usage: "tagall",
  react: "📢",
  start: async (
    Miku,
    m,
    { text, prefix, isBotAdmin, isAdmin, participants, args }
  ) => {
    if (!isAdmin)
      return m.reply(mess.useradmin);

    let message = args
      ? args.join(" ")
      : m.quoted
      ? m.quoted.msg
      : "No Message";

    let mess = `               *『 Attention Here 』*
    
*Tagged by:* @${m.sender.split("@")[0]}
    
*Message:* ${message}\n\n`;

    for (let mem of participants) {
      mess += `♢ @${mem.id.split("@")[0]}\n`;
    }
    mess += `\n\n                    *Thank You*\n`;

    await Miku.sendMessage(
      m.from,
      { text: mess, mentions: participants.map((a) => a.id) },
      { quoted: m }
    );
  },
};
