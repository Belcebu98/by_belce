let handler = async (m, { conn }) => {
let txt = ''
let vn = './media/listas.mp3'
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\nπ ${await conn.getName(jid)}\nπΈ ${jid} \n${chat?.metadata?.read_only ? 'β *πΊππ πππππ ππππ | π΅π*' : 'β *πΊπππ ππππ | πππ*'}\n\n`
m.reply(`*${gt} π¬πππ ππ πππππ ππππππ:*`.trim())

conn.sendHydrated(m.chat, txt, wm, null, 'https://github.com/Belcebu98/by_belce', 'β¬β°βπβ°β¬πͺπ― πͺβ±π', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '.menu'],
['πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ β', '/cuentasgb']
], m,)
conn.sendFile(m.chat, vn, 'listas.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
export default handler
