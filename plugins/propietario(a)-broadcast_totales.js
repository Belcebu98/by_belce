import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
for (let id of chatsall) { 
conn.sendButton(id, `*β­ββ[ πΎπ€π’πͺπ£πππππ€ ]ββββ¬£*\n*β*\n*βπ* ${text}\n*β*\n*β°βββββββββββββββββββ¬£*`, 'β πͺπππππππππ πππππππ \n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π ππ£ππ€ πππππππ‘', '.cuentaslb'],['π πππ£πͺ', '.menu']], false, {
contextInfo: { externalAdReply: {
title: 'β¬β°βπβ°β¬πͺπ― πͺβ±π',
body: 'πΊππππ πππ πΎπππππ¨ππ', 
sourceUrl: `wa.me/56977774748`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} β π¬π πππππππ πππ πππππππ π ${chatsall.length} πͺπππ πππππππ\nπ¬π πππππππ πππ ππ ππ ππππ πππππππ π πππππ πππ πͺππππ π·πππππππ. π«πππππππ..*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicar|comunicado|broadcastall|bc)$/i
handler.rowner = true
handler.exp = 500
export default handler
