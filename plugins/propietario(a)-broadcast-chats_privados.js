import fs from 'fs'
let handler = async (m, { conn, text }) => {
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
for (let id of chats) { 
conn.sendButton(id, `*β­ββ[ πΎπ€π’πͺπ£πππππ€ ]ββββ¬£*\n*β*\n*βπ* ${text}\n*β*\n*β°βββββββββββββββββββ¬£*`, 'β *πΎπ€π’πͺπ£πππππ€ π€ππππππ‘*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π ππ£ππ€ πππππππ‘', '.cuentaslb'],['π πππ£πͺ', '.menu']], false, {
contextInfo: { externalAdReply: {
title: 'β¬β°βπβ°β¬πͺπ― πͺβ±π',
body: 'ππͺπ₯ππ§ ππ€π© ππππ©π¨πΌπ₯π₯', 
sourceUrl: `wa.me/56977774748`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} β π¬π πππππππ πππ πππππππ π ${chats.length} πͺππππ π·πππππππ\n*π¬π πππππππ πππ ππ ππ ππππ πππππππ π πππππ πππ πͺππππ π·πππππππ. π«πππππππ.`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicarpv|anunciopv|annunciopv|broadcastchats?|bcc(hats?)?)$/i
handler.exp = 500
handler.rowner = true
export default handler
