import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
/*
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀`,
rows: [
{title: "❇️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ❇️", description: null, rowId: `${usedPrefix}menu`},
{title: "✳️ 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✳️", description: null, rowId: `${usedPrefix}allmenu`},
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: null, rowId: `${usedPrefix}ping`}, 
{title: "💎 𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙧 💎", description: "𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝙍 𝘼 𝙇𝘼 𝙐𝙇𝙏𝙄𝙈𝘼 𝙑𝙀𝙍𝙎𝙄𝙊𝙉", rowId: `${usedPrefix}update`},
{title: "💎 𝙍𝙚𝙞𝙣𝙞𝙘𝙞𝙖𝙧 💎", description: "𝙍𝙀𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝙇𝘼 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙇", rowId: `${usedPrefix}reiniciar`},
{title: "💎 𝘽𝙤𝙧𝙧𝙖𝙧𝙩𝙢𝙥 💎", description: "𝘽𝙊𝙍𝙍𝘼𝙍 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎 𝘿𝙀 𝘾𝙊𝙉𝙎𝙐𝙈𝙊", rowId: `${usedPrefix}clear`},
{title: "💎 𝘽𝙖𝙣𝙚𝙖𝙧 𝘾𝙝𝙖𝙩 💎", description: "𝙊𝙈𝙄𝙏𝙄𝙍 𝙐𝙎𝙊 𝘿𝙀 BELCEBOT 𝙀𝙉 𝘾𝙃𝘼𝙏𝙎", rowId: `${usedPrefix}ban1`},   
{title: "💎 𝘿𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙧 𝘾𝙝𝙖𝙩 💎", description: "𝙍𝙀𝘼𝙉𝙐𝘿𝘼𝙍 𝙐𝙎𝙊 𝘿𝙀 BELCEBOT 𝙀𝙉 𝘾𝙃𝘼𝙏", rowId: `${usedPrefix}}desban1`},    
{title: "💎 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 𝙂𝙚𝙣𝙚𝙧𝙖𝙡 💎", description: "𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉 𝘼𝙉𝙐𝙉𝘾𝙄𝙊 𝘼 𝙏𝙊𝘿𝙊𝙎", rowId: `${usedPrefix}bc`}, 
{title: "💎 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 𝙖 𝙋𝙧𝙞𝙫𝙖𝙙𝙤 💎", description: "𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉 𝘼𝙉𝙐𝙉𝘾𝙄𝙊 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊", rowId: `${usedPrefix}comunicarpv`},  
{title: "💎 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 𝙖 𝙂𝙧𝙪𝙥𝙤𝙨 💎", description: "𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉 𝘼𝙉𝙐𝙉𝘾𝙄𝙊 𝘼 𝙂𝙍𝙐𝙋𝙊𝙎", rowId: `${usedPrefix}bcgc`},  
]}, ] */
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid1.mp4'  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
╭━━〔 *${wm}* 〕━━⬣
┃💗 ¡𝙃𝙤𝙡𝙖! ${username}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
┃❏ *𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖  ➺ ${exp}*
┃❏ *𝙉𝙞𝙫𝙚𝙡  ➺* ${level}
┃❏ *𝙍𝙤𝙡 ➺ ${role}*
┃❏ *𝙇𝙤𝙡𝙞𝙘𝙤𝙞𝙣𝙨 ➺ $ ${money}*
┃❏ *𝙐𝙨𝙪𝙖𝙧𝙞𝙤  ➺ ${Object.keys(global.db.data.users).length}* 
┃⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃〔 𝙈𝙚𝙣𝙪 𝙥𝙖𝙧𝙖 𝙚𝙡 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤/𝙖 〕
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💎➺ _${usedPrefix}actualizar | update_
┃💎➺ _${usedPrefix}reiniciar | restart_
┃💎➺ _${usedPrefix}borrartmp | cleartmp_
┃💎➺ _${usedPrefix}ban1 | banchat1_
┃💎➺ _${usedPrefix}desban1 | unbanchat1_
┃💎➺ _${usedPrefix}comunicar | broadcastall | bc_
┃💎➺ _${usedPrefix}comunicarpv | broadcastchats | bcc_
┃💎➺ _${usedPrefix}comunicargrupos | broadcastgc_
┃💎➺ _${usedPrefix}bcgc_
╰━━━━━━━━━━━━━━━━━━━⬣`.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', 'ℬℰℒ𝒞ℰℬ𝒪𝒯 𝒪ℱ𝒞', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 💫', '.allmenu'],
['𝙈𝙚𝙣𝙪 𝙙𝙚𝙨𝙥𝙡𝙚𝙜𝙖𝙗𝙡𝙚 🌟', '/menulista'],
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ⚡', '#menu']
], m,)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(ownermenu)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
