let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*πππ£π¨πππ:* ${pesan}`
let teks = `*βΊπΌππ©ππ«π ππ§πͺπ₯π€π¨ π£οΈβΊ*\n\nβ ${oi}\n\nβ *ππ©ππ¦πͺππ©ππ¨:*\n`
for (let mem of participants) {
teks += `β£πΈ @${mem.id.split('@')[0]}\n`}
teks += `*β* β¬β°βπβ°β¬πͺπ― πͺβ±π\n\n*ββββββββββββββββ*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciΓ³n)$/i
handler.admin = true
handler.group = true
export default handler