let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `*_๐พ๐ค๐ข๐๐ฃ๐ฏ๐๐ฃ๐๐ค ๐ฅ๐ง๐ช๐๐๐ ๐๐๐ก ๐ซ๐๐ก๐ค๐๐๐๐๐..._*`.trim()
  m.reply(txt)

await m.reply('๐')
await m.reply('๐๐')
await m.reply('๐๐๐')
await m.reply(`โฐโฑโโฑ *๐น๐๐๐๐๐๐๐๐๐* โฑโโฑโฎ`)
 
let veloz = 
`๐ *๐ฝ๐๐๐๐๐๐๐๐:*\n *${speed}* *Milisegundos*\n\n๐ *๐บ๐๐๐๐:*\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: 'โฌโฐโ๐โฐโฌ๐ช๐ฏ ๐ชโฑ๐', url: 'https://github.com/Belcebu98/by_belce'}},
{index: 2, urlButton: {displayText: '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', url: 'https://www.instagram.com/papi_belce/'}},
{index: 3, quickReplyButton: {displayText: '๐๐ฉ๐ง๐ ๐ซ๐๐ฏ', id: '#ping'}},
{index: 4, quickReplyButton: {displayText: '๐๐ฃ๐๐ค๐ง๐ข๐๐๐รณ๐ฃ', id: '#infobot'}},
{index: 5, quickReplyButton: {displayText: '๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['Vista', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

 

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
