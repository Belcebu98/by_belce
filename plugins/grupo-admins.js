let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*ðððĢðĻððð:* ${pesan}`
let text = 
`â­ââ[ *ððĢðŦðĪðððĢððĪ ðððĒððĢðĻ* ]ââââŽĢ 
${oi}

*ðððĒððĢðĻ:*
${listAdmin}

ððĻðð§ ððĄ ðððĻðĪ ðð ððĒðð§ðððĢððð
â°ââââââ[ *ð  ${vs}* ]ââââââŽĢ`.trim()

conn.sendHydrated(m.chat, text, `ðððĒððĢðĻ | ${wm}`, pp, 'https://github.com/Belcebu98/by_belce', 'âŽâ°âðâ°âŽðŠðŊ ðŠâąð', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ â', '.menu']
], m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

//conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['admins <texto>']
handler.tags = ['group'] 
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
