let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*ππͺπ ππ¨π©π ππͺπ¨ππππ€?ππ£ππ§ππ¨π ππ‘ π£π€π’ππ§π /π©πΜπ©πͺπ‘π€π¨ πππ‘ π‘π πππ£πππ€Μπ£*\n\n*ββ ππππ’π₯π‘π€:*\n*${usedPrefix + command} bad bunny*`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let listSerch3 = []
let listSerch4 = []
let teskd = `π΄πΜππππ πππππππππππ πππ: ${args.join(" ")}`
const sections = [{
title: `|οΌοΌοΌοΌοΌ{ π¨ππππ }οΌοΌοΌοΌοΌ|`,
rows: listSerch },
{              
title: `|οΌοΌοΌοΌοΌ{ π½ππππ }οΌοΌοΌοΌοΌ|`,
rows: listSerch2 },
{              
title: `|οΌοΌ{ π«πππππππππ  οΌ­οΌ°οΌ }οΌοΌ|`,
rows: listSerch3 },
{              
title: `|οΌοΌ{ π«πππππππππ  οΌ­οΌ°οΌ }οΌοΌ|`,
rows: listSerch4 }]
const listMessage = {
text: teskd,
footer: 'π¬ππππ πππ πππππΜπ π ππππππππ ππππππ',
title: " γ π΄πΜππππ πππππππππππ γ",
buttonText: "[β¦ πΉπππππππππ β¦]",
sections}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listSerch3.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listSerch4.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*πΌππ, ππππ, ππππππ ππ πππππππ πππ πππππ πππππππ*')
}}
handler.command = /^playlist|playlist2$/i
export default handler
