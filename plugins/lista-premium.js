let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `ποΈ πΌππππππ π·ππππππ
*β­β’Β·βββββββββββββββββββΒ·β’*
β *π»ππππ : ${prem.length} πΌππππππ* ${prem ? '\n' + prem.map(([jid], i) => `
β *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios' : conn.getName(jid)}
β ${isOwner ? '@' + jid.split`@`[0] : jid}\nβ - - - - - - - - -`.trim()).join('\n') : ''}
*β°β’Β·βββββββββββββββββββΒ·β’*`
await conn.sendButton(m.chat, caption, `ποΈ πππππππ  β’ ${vip ? 'β' : 'β'}\n${wm}`, null, [ 
[`${vip ? 'β¦ π«πππππππ πππ πππππππ β¦': 'β¦ πͺπππππ ππππ πππππππβ¦'}`, `${vip ? '.allmenu': '.pase premium'}`]], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listapremium)$/i

export default handler
