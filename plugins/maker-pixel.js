let handler = async (m, { conn, usedprefix, text }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/pixelate', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '🌀 *𝑨𝒒𝒖𝒊́ 𝒆𝒔𝒕𝒂 𝒍𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 𝒑𝒊𝒙𝒆𝒍𝒂𝒅𝒂!!*\nℬℰℒ𝒞ℰℬ𝒪𝒯 𝒪ℱ𝒞', m)
}
handler.help = ['pixel','difuminar']
handler.tags = ['maker']
handler.command = /^(pixel|pixelar|difuminar)$/i
handler.limit = 1
handler.register = true
export default handler
