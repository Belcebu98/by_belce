let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, `ππ ππͺπ£πππ€Μπ£ *#on antitoxicos* ππ¨π©πΜ πΏππ¨πππ©ππ«πππ, ππππ ππ ππ¨π©π πππ©ππ«π πππππ ππͺπ£πππ€Μπ£, π₯ππ§π π¦πͺπ ππͺπ£πππ€π£π ππ¨π©π ππ€π’ππ£ππ€`, fkontak, m) 
let who
let img = 'https://telegra.ph/file/635b82df8d7abb4792eab.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `π¬ππππππππ ππ πππππππ πππ πππ πππππππ πππ πππππππππππ β οΈ\n\nπππππππ \n*${usedPrefix + command} @tag*`
user.warn += 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} πΉππππππΜ πππ πππππππππππ ππ ππππ πππππ!!\n\n`, `*πππππππππππ:*\nβ οΈ *${user.warn}/4*\n\n${wm}`, img, [
[`π­ π³π ππππππ`, '.ok'],
['βοΈ π΄πππ', '/menu']], false, { mentions: [who] }) //[m.sender]
	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`ππ π‘π€π¨ πππ«ππ§π©ππ π«ππ§πππ¨ π«ππππ¨!!\n*@${who.split`@`[0]}* π¨πͺπ₯ππ§ππ§π©π π‘ππ¨ *4* πππ«ππ§π©ππ£πππ\n πππ€π§π π¨ππ§πΜ ππ‘ππ’ππ£πππ€(πΌ) π`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') //@${m.sender.split`@`[0]}
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(advertir|advertencia|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
