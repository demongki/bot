require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const path = require('path')
const os = require('os')
const hxz = require('hxz-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./Lib/myfunc')
const { pinterest } = require('./Lib/scraper')
const { tiktokDownloader, instaDownloader, zippyDownloader, mediafireDownloader } = require('./Lib/downloader')

module.exports = kirbotz = async (kirbotz, m, chatUpdate, store) => {
try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await kirbotz.decodeJid(kirbotz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')     
	    const ya = '```'
	    const fakekirbotz = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'Created By BloodSword',
      jpegThumbnail: thumb,
      viewOnce: true
    }
  }
}
	    const namaownernya = 'ZAKKY'
	    const namabotnya = 'ZakBotz - MD'
	    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await kirbotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const textTemplateButtons = (from, text, footer, buttons) => { return kirbotz.sendMessage(from, { text: text, footer: footer, templateButtons: buttons }) }        
        const reply = (teks) => {
	    kirbotz.sendMessage(from, { text: teks }, { quoted: m })
		}
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
           
} catch (err) {
console.error(err)
}

            if (!kirbotz.public) {
            if (!m.key.fromMe) return
            }
async function replyTemplate(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `WA OWNER`, url : `${wame}` } },
	             		{ quickReplyButton: { displayText: `RULES`, id : 'rules'}}
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By KirBotz", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyOwnerr(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `YouTube`, url : `${yt}` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By KirBotz", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyNya(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `MyOwner`, url : `${wame}` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: `${global.pengguna}`, 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyPremium(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `MyOwner`, url : `${wame}` } },
	             		{ quickReplyButton: { displayText : `Buy Premium`, id : `buypremium` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By KirBotz", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }
                
async function sendBut5nya(teks) {
var button = [
{"urlButton": {"displayText": "MyOwner🔥","url": `https://wa.me/6287705048235`}},
{"quickReplyButton": {"displayText": "Sewabot","id": 'sewabot'}},
{"quickReplyButton": {"displayText": "Donasi","id": 'donasi'}},
{"quickReplyButton": {"displayText": "Status Bot KirBotz","id": 'ping'}}
		]
kirbotz.sendMessage(from, { caption: teks, location: { jpegThumbnail: thumb }, templateButtons: button, footer: `Created By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
//Auto Keti
	kirbotz.sendPresenceUpdate('composing', m.chat)
            
            if (m.message) {
            kirbotz.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            }
            setInterval(() => {
            fs.writeFileSync('./Database/database.json', JSON.stringify(global.db, null, 2))
            }, 60 * 1000)
            let cron = require('node-cron')
            cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
            }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
            })
            
	        
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kirbotz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kirbotz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kirbotz.ev.emit('messages.upsert', msg)
        }
	      
        
        if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antilink && !isCreator && !isGroupAdmins){
        if (budy.match(`https://chat.whatsapp.com`)) {
        kirbotz.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    kirbotz.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }
	    

	
	
	
//Saya Gabot	    
if (budy.startsWith("@6282288783972")){
   kirbotz.sendMessage(from, { audio: {url : `https://d.top4top.io/m_22231oj7h1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
}        
        
        async function sendPlay(from, query) {
        var url = await yts(query)
        url = url.videos[0].url
        hxz.youtube(url).then(async(data) => {
        var button = [
		{ urlButton: { displayText: `❃ S O U R C E V I D I O ❃`, url : ` https://youtu.be/${data.id}` } },
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `🎥 Video (${data.size})`, id: `${prefix}ytmp4 ${url}` } },
		{ quickReplyButton: { displayText: `🎵 Audio (${data.size_mp3})`, id: `${prefix}ytmp3 ${url}` } },
		{ quickReplyButton: { displayText: `🔍 Search ${data.title}`, id: `${prefix}ytsearch https://youtu.be/${data.id}` } }
		]
        var hg = `*⚐︎ Title :* ${data.title}\n*⚐︎ Quality :* ${data.quality}`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: await getBuffer(data.thumb) }, templateButtons: button, footer: `Pilih Salah Satu Button Dibawah⬇️`, mentions: [sender] })
        }).catch((e) => {
        kirbotz.sendMessage(from, { text: mess.error }, { quoted: m })
        ownerNumber.map( i => kirbotz.sendMessage(from, { text: `Send Play Error : ${e}` }))
        })
        }

switch (command) {

case 'p':
if (args.length == 0) return  replyNya(`salam bang jangan p p p mulu`)
break

case 'assalamuallaikum':
if (args.length == 0) return  replyNya(`waalaikumsalam, apa yang bisa saya bantu?`)
break

case 'menu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `MAU BELANJA APA KAK`,
                    description: `PILIH DISINI`,
                    buttonText: "SELECT STORE",
                    footerText: "*By BloodSword*",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "menu jualan",
								"rows": [
									{
										"title": "DIAMOND FREE FIRE",
										 "description": "silahkan pilih Diamond Free Fire",
										"rowId": `${prefix}ff`
									},
									{
										"title": "DIAMOND MOBILE LEGENDS",
										 "description": "silahkan pilih Diamond Mobile Legends",
										"rowId": `${prefix}ml`
									},
									{
										"title": "PULSA ALL OPERATOR",
										 "description": "silahkan pilih PULSA ALL OPERATOR",
										"rowId": `${prefix}pulsa`
									},
									{
										"title": "SUNTIK FOLLOWER INSTAGRAM",
										 "description": "silahkan pilih SUNTIK INSTAGRAM",
										"rowId": `${prefix}ig`
									},
									{
										"title": "LIKE INSTAGRAM",
										 "description": "silahkan pilih LIKE INSTAGRAM",
										"rowId": `${prefix}likeig`
									},
									{
										"title": "VIEWS INSTAGRAM",
										 "description": "silahkan pilih VIEWS INSTAGRAM",
										"rowId": `${prefix}viig`
									},
									{
										"title": "TOKEN PLN",
										 "description": "silahkan pilih TOKEN PLN",
										"rowId": `${prefix}pln`
									},
									]				
							}											
						],
          listType: 1
                }
            }), {})
            kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

//case 'pubg':
var Yy = 0
await kirbotz.send5ButGif(from, `${ucapanWaktu} *${pushname}*
*VIA ID + NICKNAME*

70💎 Rp 9.170
140💎 Rp 18.240
210💎 Rp 27.500
355💎 Rp 45.850
425💎 Rp 55.242
500💎 Rp 65.286
720💎 Rp 91.242
860💎 Rp 110.088
930💎 Rp 118.761
1000💎 Rp 130.104
1065💎 Rp 136.000
1275💎 Rp 161.375
1450💎 Rp 185.500
2000💎 Rp 249.300
4000💎 Rp 498.600
BERLAKU KELIPATAN
`, `© ZakBotz - MD`, [
{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},
{"quickReplyButton": {"displayText": "Menu Pembayaran","id": 'payment'}},
{"quickReplyButton": {"displayText": "Bayar","id": 'pembayaran'}}] )
break//


case 'owner': case 'creator': {
kirbotz.sendContact(m.chat, global.owner, m)
}
break

case 'pln':
var Yy = 0
await kirbotz.send5ButGif(from, `${ucapanWaktu} *${pushname}*
v1
√ 20.000 🔋 : 22.000
√ 50.000 🔋 : 52.000
√ 100.000 🔋 : 102.000
√ 200.000 🔋 : 202.000
√ 500.000 🔋 : 502.000

`, `© ZakBotz - MD`, [
{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},
{"quickReplyButton": {"displayText": "Menu Pembayaran","id": 'payment'}},
{"quickReplyButton": {"displayText": "Bayar","id": 'pembayaran'}}] )
break

case 'payment':
if (args.length == 0) return  replyNya(`

• *Shoopepay : 0881036690566*
• *Dana : 0881036690566*
• *OVO : 0881036690566*
`)
break

case 'viig':
var Yy = 0
await kirbotz.send5ButGif(from, `${ucapanWaktu} *${pushname}*
v2
√ 1.000 💉 : 2.000
√ 2.000 💉 : 3.000
√ 5.000 💉 : 5.000
√ 10.000 💉 : 9.000
√ 20.000 💉 : 15.000
√ 50.000 💉 : 19.500
√ 100.000 💉 : 25.000

`, `© ZakBotz - MD`, [
{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},
{"quickReplyButton": {"displayText": "Menu Pembayaran","id": 'payment'}},
{"quickReplyButton": {"displayText": "Bayar","id": 'pembayaran'}}] )
break

case 'likeig':
var Yy = 0
await kirbotz.send5ButGif(from, `${ucapanWaktu} *${pushname}*
v2
√ 1.000 💉 : 5.000
√ 2.000 💉 : 8.000
√ 5.000 💉 : 14.500
√ 10.000 💉 : 26.000
√ 20.000 💉 : 47.000
√ 50.000 💉 : 103.000
√ 100.000 💉 : 196.000

`, `© ZakBotz - MD`, [
{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},
{"quickReplyButton": {"displayText": "Menu Pembayaran","id": 'payment'}},
{"quickReplyButton": {"displayText": "Bayar","id": 'pembayaran'}}] )
break

case 'ig':
var Yy = 0
await kirbotz.send5ButGif(from, `${ucapanWaktu} *${pushname}*
kirim nama/username ke MyOwner
v2
paket 1:
√ 1.000 💉 : 12.000
√ 2.000 💉 : 21.000
√ 5.000 💉 : 27.000
√ 10.000 💉 : 65.000
√ 20.000 💉 : 123.000
√ 50.000 💉 : 269.000
√ 100.000 💉 : 589.000

paket 2:
√ 1.000 💉 : 14.000
√ 2.000 💉 : 18.000
√ 10.000 💉 : 68.500
√ 20.000 💉 : 129.600
√ 50.000 💉 : 304.500
√ 100.000 💉 : 615.000

paket 3:
√ 1.000 💉 : 22.000
√ 2.000 💉 : 37.000
√ 10.000 💉 : 162.000
√ 20.000 💉 : 317.000
√ 50.000 💉 : 790.000

`, `© ZakBotz - MD`, [
{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},
{"quickReplyButton": {"displayText": "Menu Pembayaran","id": 'payment'}},
{"quickReplyButton": {"displayText": "Bayar","id": 'pembayaran'}}] )
break

case 'pulsa':
var Yy = 0
await kirbotz.send5ButGif(from, `${ucapanWaktu} *${pushname}*
v2
√ 5000 : 6.900
√ 10000 : 11.900
√ 15000 : 16.900
√ 20000 : 21.900
√ 25000 : 26.900
√ 30000 : 31.900
√ 35000 : 36.900
√ 40000 : 41.900
√ 50000 : 51.900
√ 55000 : 56.900
√ 60000 : 61.900
√ 70000 : 71.900
√ 75000 : 76.900
√ 80000 : 81.900
√ 90000 : 91.900
√ 100000 : 101.900
√ 200000 : 201.900

`, `© ZakBotz - MD`, [
{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},
{"quickReplyButton": {"displayText": "Menu Pembayaran","id": 'payment'}},
{"quickReplyButton": {"displayText": "Bayar","id": 'pembayaran'}}] )
break

case 'ff':
var Yy = 0
await kirbotz.send5ButGif(from, `${ucapanWaktu} *${pushname}*

v1 :
√ 5 💎 : 1.000
√ 10 💎 : 2.000
√ 20 💎 : 3.000
√ 50 💎 : 7.700
√ 70 💎 : 10.200
√ 80 💎 : 12.100
√ 100 💎 : 14.560
√ 140 💎 : 19.500
√ 210 💎 : 28.700
√ 280 💎 : 37.400
√ 355 💎 : 44.500
√ 375 💎 : 49.600
√ 405 💎 : 53.700
√ 475 💎 : 62.800
√ 500 💎 : 66.100
√ 635 💎 : 83.500
√ 720 💎 : 93.000

v2 :
√ 878 💎 : 193.000
√ 964 💎 : 216.150
√ 1010 💎 : 253.100
√ 1220 💎 : 298.100
√ 1412 💎 : 310.150
√ 2195 💎 : 463.150

`, `© ZakBotz - MD`, [
{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},
{"quickReplyButton": {"displayText": "Menu Pembayaran","id": 'payment'}},
{"quickReplyButton": {"displayText": "Bayar","id": 'pembayaran'}}] )
break


case 'ml':
var Yy = 0
await kirbotz.send5ButGif(from, `${ucapanWaktu} *${pushname}*

v1 :
√ 3 💎 : 2.000
√ 12💎 : 5.000
√ 28 💎 : 9.300
√ 36 💎 : 11.500
√ 59 💎 : 17.500
√ 74 💎 : 20.500
√ 85 💎 : 21.500
√ 170 💎 : 40.000
√ 185 💎 : 47.500
√ 222 💎 : 58.000
√ 296 💎 : 79.000
√ 370 💎 : 93.000
√ 568 💎 : 142.000

v2 :
√ 600 💎 : 150.000
√ 706 💎 : 157.000
√ 878 💎 : 193.000
√ 963 💎 : 216.200
√ 1010 💎 : 253.500
√ 1220 💎 : 298.200

`, `© ZakBotz - MD`, [
{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},
{"quickReplyButton": {"displayText": "Menu Pembayaran","id": 'payment'}},
{"quickReplyButton": {"displayText": "Bayar","id": 'pembayaran'}}] )
break


case 'pembayaran': {
if(!text) throw `CONTOH \n ID/USERNAME : \n PRODUK : \n HARGA :  `
kirbotz.sendMessage(`62881036690566@s.whatsapp.net`, {text: `*Pembeli Dari:* wa.me/${m.sender.split("@")[0]}
List Yang Di Beli: ${text}` })
m.reply(`Terimakasih, silahkan di tunggu`)
}
break

case 'kirim1':
let textny = `${q}`
for (let i of ownerNumber) {
    kirbotz.sendMessage(i, { text: textny })
}
reply('sukses terkirim')
break


default:
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
m = String(err)
await reply(m)
}
}
if (budy.startsWith('$')) {
if (!isCreator) return replyNya(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
