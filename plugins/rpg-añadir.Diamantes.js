// creditos a https://github.com/FG98F
import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}π«πππ ππ πππππππππ ππ πππππππ *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}π°ππππππ ππ ππππππππ ππ πππππππππ`
if (isNaN(txt)) throw `${mg}πΊππ ππΜππππππ, ππππ πππππππ ππΜπππππ`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw `${mg}π¬π ππΜππππ ππΜππππ ππππ ππππππππ ππ  *1*`
let users = global.db.data.users
users[who].limit += dmt
//m.reply(`β‘ *π π°π½Μπ°π³πΈπ³πΎ*
//βββββββββββββββ
//β’ *πππππ:* ${dmt}
//βββββββββββββββ`)
conn.sendHydrated(m.chat, `β­[ π«πππππππ π ]β¬£\nβ\nβα¦ π·πππ:\nβα¦ *${text}*\nββββββββββββββββββ\nβα¦ ππ ππ ππΜππππΜ\nβα¦ *${dmt} Diamante(s)* π\nβ\nβ°βββββββββββββββ¬£`, wm, null, md, 'β¬β°βπβ°β¬πͺπ― πͺβ±π', null, null, [
['π πππ£πͺ πΌπ«ππ£π©πͺπ§π π', '.rpgmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['aΓ±adirdiamantes', 'dardiamantes', 'dardiamante'] 
handler.rowner = true
export default handler
