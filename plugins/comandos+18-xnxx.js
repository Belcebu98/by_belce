//Creditos https://github.com/BrunoSobrino

import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `šš¤šØ šš¤š¢šš£šš¤ +18 ššØš©šĢš£ šššØššš©šš«ššš¤šØ šŖšØš  #š¤š£ š¢š¤šš¤šš¤š§š£š® š„šš§š ššš©šš«šš§`
if (!args[0]) throw `ššŖš ššŖšØšš? ššØšš§ šŖš£ šš£š”ššš šš š­š£š­š­\nšššš¢š„š”š¤\n*${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/sexo_en_casa*`
try {
await conn.reply(m.chat, `ā³ļø ššØš„šš§š š„š¤š§ ššš«š¤š§  š š¦šŖšĢ šØš šš£š«šĢš šš” š«šĢššš¤, š£š¤ šØšš šš„šŖš§ššš¤, ššØš„šš§š š¦šŖš ššØš©š¤š® š”šš£š©š¤š¢`, m)
//let res = await fetch(API('https://zenzapis.xyz', '/downloader/xvideos', { apikey: 'B2CB95861FBF', url: args[0] }))
let res = await fetch(`https://zenzapis.xyz/downloader/xnxx?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
if (json.result?.message) throw json.result.message
let teks = `ššĢš©šŖš”š¤  ā¤ ${json.result.title}`
conn.sendMessage(m.chat, { video: { url: json.result.files.high }, caption: teks }, { quoted: m })
} catch (e) {
m.reply(`ššš, šØš ššš®š¤Ģ šš” šØšš§š«ššš¤ š¼, ššŖšš”š«š šš” šš£š©šš£š©šš§ š¢šĢšØ š©šš§šš`)
console.log(e)
}}
handler.command = /^(xnxx|videoxnxx|xnxxvideo|xnxxdl)$/i
handler.level = 5
handler.limit = 3
handler.register = true
export default handler
