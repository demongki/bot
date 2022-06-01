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
case 'menu':
let timestamp = speed()
let latensi = speed() - timestamp
await kirbotz.send5ButGif(from, `       『 ${ya}Info User${ya} 』
${ya}Nama User${ya} : ${pushname}
${ya}Nomor User${ya} : ${sender.split("@")[0]}

        『 ${ya}Info Bot${ya} 』
${ya}Nama Owner${ya} : ${namaownernya}
${ya}Nama Bot${ya} : ${namabotnya}
${ya}User Bot${ya} : ${Object.keys(global.db.data.users).length} User
${ya}Runtime Bot${ya} : ${runtime(process.uptime())}
${ya}Speed Bot${ya} : ${latensi.toFixed(4)} _Detik_
${ya}Library${ya} : Baileys Multi Device
${ya}Tanggal${ya} : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
${ya}Wib${ya} : ${wib}
${ya}Wit${ya} : ${wit}
${ya}Wita${ya} : ${wita}

 『 ${ya}Syarat Dan Ketentuan${ya} 』
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏1. Teks Dan Nama Pengguna WhatsApp Anda Kami Simpan Di Dalam Server Selama Bot Aktif

2. Data Anda Akan Di Hapus Ketika Bot Offline

3. Kami Tidak Menyimpan Gambar, Video, File, Audio, Dan Dokumen Yang Anda Kirim

4. Kami Tidak Pernah Meminta Anda Untuk Memberikan Informasi Pribadi

5. Jika Menemukan Bug/Error silahkan langsung lapor ke Owner Bot

6. Cukup Perintah 1x Jika Bot Tidak Merespon Harap Ulangi Kembali, Jika Di Ulangi Kembali Tidak Merespon, Bot Tidak Aktif

7. Anggarang Spam, Share Virus Virtex, Telpon, Video Call, Kami Akan Blockir Anda

8. Apapun yang anda perintah pada bot ini, Kami Tidak Bertanggung Jawab
Terimakasih!~` , `Selamat Menggunakan~`, [
{"urlButton": {"displayText": "WhatApp Owner","url": `https://wa.me/62881036690566`}},
{"quickReplyButton": {"displayText": "List Menu","id": 'allmenu'}},
{"quickReplyButton": {"displayText": "List Store","id": 'storemenu'}},
{"quickReplyButton": {"displayText": "Rental Pricing","id": 'sewabot'}}] )
break
case 'sewabot':
await kirbotz.send5ButGif(from, `${ya}OPEN SEWABOT :${ya}
➪ *1 Minggu :* _5.000_
➪ *1 Bulan :* _10.000_
➪ *Permanen :* _15.000_

${ya}OPEN JASA RUN BOT:${ya}
HEROKU _20.000_
Kelebihan
➪ Fast Respon
➪ Hemat Kuota
➪ No Ribet

Kelemahan
➪ Run Ulang Fee 5k
 
 Note:
Mengggunakan Jasa Run Wajib Memakai SC MD
───────────────`, `© ZakBotz - MD'`, [
{"urlButton": {"displayText": "MyYoutube Bantu Subscribe","url": `https://youtu.be/Sk6Mt9Hyytc`}},
{"quickReplyButton": {"displayText": "List Menu","id": 'allmenu'}}] )
break
case 'allmenu':
var Yy = 0
await kirbotz.send5ButGif(from, `${ucapanWaktu} *${pushname}*

┌──『 ${ya}Owner Menu${ya} 』
│ ${ya}${Yy+=1} $ Evalator${ya}
│ ${ya}${Yy+=1} > Executor${ya}
│ ${ya}${Yy+=1} ${prefix}sewa add waktu${ya}
│ ${ya}${Yy+=1} ${prefix}sewa del${ya}
│ ${ya}${Yy+=1} ${prefix}listsewa${ya}
│ ${ya}${Yy+=1} ${prefix}ceksewa${ya}
│ ${ya}${Yy+=1} ${prefix}join${ya}
│ ${ya}${Yy+=1} ${prefix}public${ya}
│ ${ya}${Yy+=1} ${prefix}self${ya}
│ ${ya}${Yy+=1} ${prefix}out${ya}
│ ${ya}${Yy+=1} ${prefix}addprem${ya}
│ ${ya}${Yy+=1} ${prefix}delprem${ya}
│ ${ya}${Yy+=1} ${prefix}block${ya}
│ ${ya}${Yy+=1} ${prefix}unblock${ya}
│ ${ya}${Yy+=1} ${prefix}bcall${ya}
│ ${ya}${Yy+=1} ${prefix}bcaudio${ya}
│ ${ya}${Yy+=1} ${prefix}bcvidio${ya}
│ ${ya}${Yy+=1} ${prefix}bcimg${ya}
└──────
┌──『 ${ya}Sticker Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}sticker${ya}
│ ${ya}${Yy+=1} ${prefix}attp${ya}
│ ${ya}${Yy+=1} ${prefix}ttp${ya}
│ ${ya}${Yy+=1} ${prefix}cry${ya}
│ ${ya}${Yy+=1} ${prefix}kill${ya}
│ ${ya}${Yy+=1} ${prefix}hug${ya}
│ ${ya}${Yy+=1} ${prefix}pat${ya}
│ ${ya}${Yy+=1} ${prefix}lick${ya}
│ ${ya}${Yy+=1} ${prefix}kiss${ya}
│ ${ya}${Yy+=1} ${prefix}bite${ya}
│ ${ya}${Yy+=1} ${prefix}yeet${ya}
│ ${ya}${Yy+=1} ${prefix}bully${ya}
│ ${ya}${Yy+=1} ${prefix}bonk${ya}
│ ${ya}${Yy+=1} ${prefix}wink${ya}
│ ${ya}${Yy+=1} ${prefix}poke${ya}
│ ${ya}${Yy+=1} ${prefix}nom${ya}
│ ${ya}${Yy+=1} ${prefix}slap${ya}
│ ${ya}${Yy+=1} ${prefix}smile${ya}
│ ${ya}${Yy+=1} ${prefix}wave${ya}
│ ${ya}${Yy+=1} ${prefix}awoo${ya}
│ ${ya}${Yy+=1} ${prefix}blush${ya}
│ ${ya}${Yy+=1} ${prefix}smug${ya}
│ ${ya}${Yy+=1} ${prefix}glomp${ya}
│ ${ya}${Yy+=1} ${prefix}happy${ya}
│ ${ya}${Yy+=1} ${prefix}dance${ya}
│ ${ya}${Yy+=1} ${prefix}cringe${ya}
│ ${ya}${Yy+=1} ${prefix}cuddle${ya}
│ ${ya}${Yy+=1} ${prefix}highfive${ya}
│ ${ya}${Yy+=1} ${prefix}handhold${ya}
│ ${ya}${Yy+=1} ${prefix}dadu${ya}
│ ${ya}${Yy+=1} ${prefix}patrick${ya}
│ ${ya}${Yy+=1} ${prefix}amongus${ya}
│ ${ya}${Yy+=1} ${prefix}gawrgura${ya}
│ ${ya}${Yy+=1} ${prefix}anjing${ya}
│ ${ya}${Yy+=1} ${prefix}bucinstick${ya}
│ ${ya}${Yy+=1} ${prefix}emojimix${ya}
│ ${ya}${Yy+=1} ${prefix}emoji${ya}
└──────
┌──『 ${ya}Convert Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}toimg${ya}
│ ${ya}${Yy+=1} ${prefix}tovideo${ya}
│ ${ya}${Yy+=1} ${prefix}tovn${ya}
│ ${ya}${Yy+=1} ${prefix}tomp3${ya}
│ ${ya}${Yy+=1} ${prefix}tourl${ya}
└──────
┌──『 ${ya}Other Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}owner${ya}
│ ${ya}${Yy+=1} ${prefix}credits${ya}
│ ${ya}${Yy+=1} ${prefix}groupbotz${ya}
│ ${ya}${Yy+=1} ${prefix}rules${ya}
│ ${ya}${Yy+=1} ${prefix}donasi${ya}
│ ${ya}${Yy+=1} ${prefix}sewabot${ya}
│ ${ya}${Yy+=1} ${prefix}scriptbot${ya}
│ ${ya}${Yy+=1} ${prefix}ssweb${ya}
│ ${ya}${Yy+=1} ${prefix}lirik${ya}
│ ${ya}${Yy+=1} ${prefix}translate${ya}
│ ${ya}${Yy+=1} ${prefix}namapeople${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen${ya}
│ ${ya}${Yy+=1} ${prefix}ceritahoror${ya}
│ ${ya}${Yy+=1} ${prefix}faktaunik${ya}
│ ${ya}${Yy+=1} ${prefix}katabijak${ya}
│ ${ya}${Yy+=1} ${prefix}pantun${ya}
│ ${ya}${Yy+=1} ${prefix}bucin${ya}
│ ${ya}${Yy+=1} ${prefix}randomnama${ya}
│ ${ya}${Yy+=1} ${prefix}halah${ya}
│ ${ya}${Yy+=1} ${prefix}hilih${ya}
│ ${ya}${Yy+=1} ${prefix}huluh${ya}
│ ${ya}${Yy+=1} ${prefix}heleh${ya}
│ ${ya}${Yy+=1} ${prefix}holoh${ya}
└──────
┌──『 ${ya}Wibu Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}anime${ya}
│ ${ya}${Yy+=1} ${prefix}nhentai${ya}
│ ${ya}${Yy+=1} ${prefix}nekopoisearch${ya}
│ ${ya}${Yy+=1} ${prefix}nekopoi${ya}
│ ${ya}${Yy+=1} ${prefix}kusonime${ya}
│ ${ya}${Yy+=1} ${prefix}lk21${ya}
│ ${ya}${Yy+=1} ${prefix}character${ya}
│ ${ya}${Yy+=1} ${prefix}manga${ya}
│ ${ya}${Yy+=1} ${prefix}gimage${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest2${ya}
└──────
┌──『 ${ya}Group Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}linkgroup${ya}
│ ${ya}${Yy+=1} ${prefix}antilink <on/off>${ya}
│ ${ya}${Yy+=1} ${prefix}autosticker <1/0>${ya}
│ ${ya}${Yy+=1} ${prefix}group <open/close>${ya}
│ ${ya}${Yy+=1} ${prefix}add 628××××${ya}
│ ${ya}${Yy+=1} ${prefix}kick @tag${ya}
│ ${ya}${Yy+=1} ${prefix}tagall <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}hidetag <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}promote @tag${ya}
│ ${ya}${Yy+=1} ${prefix}demote @tag${ya}
│ ${ya}${Yy+=1} ${prefix}setppgc <reply foto>${ya}
│ ${ya}${Yy+=1} ${prefix}setname <name>${ya}
│ ${ya}${Yy+=1} ${prefix}setdesc <teks>${ya}
└──────
┌──『 ${ya}Game Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}goblokcek${ya} 
│ ${ya}${Yy+=1} ${prefix}jelekcek${ya} 
│ ${ya}${Yy+=1} ${prefix}gaycek${ya}
│ ${ya}${Yy+=1} ${prefix}lesbicek${ya}
│ ${ya}${Yy+=1} ${prefix}gantengcek${ya} 
│ ${ya}${Yy+=1} ${prefix}cantikcek${ya}
│ ${ya}${Yy+=1} ${prefix}begocek${ya} 
│ ${ya}${Yy+=1} ${prefix}suhucek${ya}
│ ${ya}${Yy+=1} ${prefix}pintercek${ya}
│ ${ya}${Yy+=1} ${prefix}jagocek${ya}
│ ${ya}${Yy+=1} ${prefix}nolepcek${ya}
│ ${ya}${Yy+=1} ${prefix}babicek${ya}
│ ${ya}${Yy+=1} ${prefix}bebancek${ya}
│ ${ya}${Yy+=1} ${prefix}baikcek${ya}
│ ${ya}${Yy+=1} ${prefix}jahatcek${ya}
│ ${ya}${Yy+=1} ${prefix}anjingcek${ya}
│ ${ya}${Yy+=1} ${prefix}haramcek${ya}
│ ${ya}${Yy+=1} ${prefix}pakboycek${ya}
│ ${ya}${Yy+=1} ${prefix}pakgirlcek${ya}
│ ${ya}${Yy+=1} ${prefix}sangecek${ya} 
│ ${ya}${Yy+=1} ${prefix}bapercek${ya}
│ ${ya}${Yy+=1} ${prefix}fakboycek${ya}
│ ${ya}${Yy+=1} ${prefix}alimcek${ya}
│ ${ya}${Yy+=1} ${prefix}suhucek${ya}
│ ${ya}${Yy+=1} ${prefix}fakgirlcek${ya}
│ ${ya}${Yy+=1} ${prefix}kerencek${ya}
│ ${ya}${Yy+=1} ${prefix}wibucek${ya}
│ ${ya}${Yy+=1} ${prefix}pasarkascek${ya}
│ ${ya}${Yy+=1} ${prefix}jadian${ya}
│ ${ya}${Yy+=1} ${prefix}apakah${ya}
│ ${ya}${Yy+=1} ${prefix}rate${ya}
│ ${ya}${Yy+=1} ${prefix}kapankah${ya}
│ ${ya}${Yy+=1} ${prefix}bisakah${ya}
└──────
┌──『 ${ya}Download Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}ytsearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}play <query>${ya}
│ ${ya}${Yy+=1} ${prefix}ytmp4 <link>${ya}
│ ${ya}${Yy+=1} ${prefix}ytmp3 <link>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktoknowm <link>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokaudio <link>${ya}
│ ${ya}${Yy+=1} ${prefix}mediafire <link>${ya}
│ ${ya}${Yy+=1} ${prefix}xnxxsearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}xnxxvideo <link>${ya}
│ ${ya}${Yy+=1} ${prefix}spotify <link>${ya}
│ ${ya}${Yy+=1} ${prefix}spotifysearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}jooxplay <query>${ya}
└──────
┌──『 ${ya}Stalk Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}tiktokstalk <nama tiktok>${ya}
│ ${ya}${Yy+=1} ${prefix}githubstalk <nama github>${ya}
│ ${ya}${Yy+=1} ${prefix}igstalk <nama ig>${ya}
│ ${ya}${Yy+=1} ${prefix}ytstalk <nama yt>${ya}
└──────
┌──『 ${ya}Islam Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}asmaulhusna${ya}
│ ${ya}${Yy+=1} ${prefix}iqra${ya}
│ ${ya}${Yy+=1} ${prefix}hadist${ya}
│ ${ya}${Yy+=1} ${prefix}juzamma${ya}
│ ${ya}${Yy+=1} ${prefix}listsurah${ya}
│ ${ya}${Yy+=1} ${prefix}jadwalsholat${ya}
│ ${ya}${Yy+=1} ${prefix}kisahnabi${ya}
│ ${ya}${Yy+=1} ${prefix}tafsirsurah${ya}
└──────
┌──『 ${ya}Logo Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}tololserti${ya}
│ ${ya}${Yy+=1} ${prefix}shadow${ya}
│ ${ya}${Yy+=1} ${prefix}cup${ya}
│ ${ya}${Yy+=1} ${prefix}cup1${ya}
│ ${ya}${Yy+=1} ${prefix}romance${ya}
│ ${ya}${Yy+=1} ${prefix}smoke${ya}
│ ${ya}${Yy+=1} ${prefix}burnpaper${ya}
│ ${ya}${Yy+=1} ${prefix}lovemessage${ya}
│ ${ya}${Yy+=1} ${prefix}undergrass${ya}
│ ${ya}${Yy+=1} ${prefix}love${ya}
│ ${ya}${Yy+=1} ${prefix}coffe${ya}
│ ${ya}${Yy+=1} ${prefix}woodheart${ya}
│ ${ya}${Yy+=1} ${prefix}woodenboard${ya}
│ ${ya}${Yy+=1} ${prefix}summer3d${ya}
│ ${ya}${Yy+=1} ${prefix}wolfmetal${ya}
│ ${ya}${Yy+=1} ${prefix}nature3d${ya}
│ ${ya}${Yy+=1} ${prefix}underwater${ya}
│ ${ya}${Yy+=1} ${prefix}golderrose${ya}
│ ${ya}${Yy+=1} ${prefix}summernature${ya}
│ ${ya}${Yy+=1} ${prefix}letterleaves${ya}
│ ${ya}${Yy+=1} ${prefix}glowingneon${ya}
│ ${ya}${Yy+=1} ${prefix}fallleaves${ya}
│ ${ya}${Yy+=1} ${prefix}flamming${ya}
│ ${ya}${Yy+=1} ${prefix}harrypotter${ya}
│ ${ya}${Yy+=1} ${prefix}carvedwood${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokmaker${ya}
│ ${ya}${Yy+=1} ${prefix}ktpmaker${ya}
│ ${ya}${Yy+=1} ${prefix}arcade8bit${ya}
│ ${ya}${Yy+=1} ${prefix}battlefield4${ya}
│ ${ya}${Yy+=1} ${prefix}pubg${ya}
│ ${ya}${Yy+=1} ${prefix}pornhub${ya}
│ ${ya}${Yy+=1} ${prefix}glitch${ya}
│ ${ya}${Yy+=1} ${prefix}avenger${ya}
│ ${ya}${Yy+=1} ${prefix}space${ya}
│ ${ya}${Yy+=1} ${prefix}ninjalogo${ya}
│ ${ya}${Yy+=1} ${prefix}marvelstudio${ya}
│ ${ya}${Yy+=1} ${prefix}lionlogo${ya}
│ ${ya}${Yy+=1} ${prefix}wolflogo${ya}
│ ${ya}${Yy+=1} ${prefix}steel3d${ya}
│ ${ya}${Yy+=1} ${prefix}wallgravity${ya}
│ ${ya}${Yy+=1} ${prefix}coolgravity${ya}
│ ${ya}${Yy+=1} ${prefix}wetglass${ya}
│ ${ya}${Yy+=1} ${prefix}multicolor3d${ya}
│ ${ya}${Yy+=1} ${prefix}watercolor${ya}
│ ${ya}${Yy+=1} ${prefix}luxurygold${ya}
│ ${ya}${Yy+=1} ${prefix}galaxywallpaper${ya}
│ ${ya}${Yy+=1} ${prefix}lighttext${ya}
│ ${ya}${Yy+=1} ${prefix}beautifulflower${ya}
│ ${ya}${Yy+=1} ${prefix}puppycute${ya}
│ ${ya}${Yy+=1} ${prefix}royaltext${ya}
│ ${ya}${Yy+=1} ${prefix}heartshaped${ya}
│ ${ya}${Yy+=1} ${prefix}birthdaycake${ya}
│ ${ya}${Yy+=1} ${prefix}galaxystyle${ya}
│ ${ya}${Yy+=1} ${prefix}hologram3d${ya}
│ ${ya}${Yy+=1} ${prefix}greenneon${ya}
│ ${ya}${Yy+=1} ${prefix}glossychrome${ya}
│ ${ya}${Yy+=1} ${prefix}greenbush${ya}
│ ${ya}${Yy+=1} ${prefix}metallogo${ya}
│ ${ya}${Yy+=1} ${prefix}noeltext${ya}
│ ${ya}${Yy+=1} ${prefix}glittergold${ya}
│ ${ya}${Yy+=1} ${prefix}textcake${ya}
│ ${ya}${Yy+=1} ${prefix}starsnight${ya}
│ ${ya}${Yy+=1} ${prefix}wooden3d${ya}
│ ${ya}${Yy+=1} ${prefix}textbyname${ya}
│ ${ya}${Yy+=1} ${prefix}writegalacy${ya}
│ ${ya}${Yy+=1} ${prefix}galaxybat${ya}
│ ${ya}${Yy+=1} ${prefix}snow3d${ya}
│ ${ya}${Yy+=1} ${prefix}birthdayday${ya}
│ ${ya}${Yy+=1} ${prefix}goldplaybutton${ya}
│ ${ya}${Yy+=1} ${prefix}silverplaybutton${ya}
│ ${ya}${Yy+=1} ${prefix}freefire${ya}
│ ${ya}${Yy+=1} ${prefix}blackpink${ya}
│ ${ya}${Yy+=1} ${prefix}neon${ya}
│ ${ya}${Yy+=1} ${prefix}greenneon${ya}
│ ${ya}${Yy+=1} ${prefix}advanceglow${ya}
│ ${ya}${Yy+=1} ${prefix}futureneon${ya}
│ ${ya}${Yy+=1} ${prefix}sandwriting${ya}
│ ${ya}${Yy+=1} ${prefix}sandsummer${ya}
│ ${ya}${Yy+=1} ${prefix}sandengraved${ya}
│ ${ya}${Yy+=1} ${prefix}metaldark${ya}
│ ${ya}${Yy+=1} ${prefix}neonlight${ya}
│ ${ya}${Yy+=1} ${prefix}holographic${ya}
│ ${ya}${Yy+=1} ${prefix}text1917${ya}
│ ${ya}${Yy+=1} ${prefix}minion${ya}
│ ${ya}${Yy+=1} ${prefix}deluxesilver${ya}
│ ${ya}${Yy+=1} ${prefix}newyearcard${ya}
│ ${ya}${Yy+=1} ${prefix}bloodfrosted${ya}
│ ${ya}${Yy+=1} ${prefix}halloween${ya}
│ ${ya}${Yy+=1} ${prefix}jokerlogo${ya}
│ ${ya}${Yy+=1} ${prefix}fireworksparkle${ya}
│ ${ya}${Yy+=1} ${prefix}natureleaves${ya}
│ ${ya}${Yy+=1} ${prefix}bokeh${ya}
│ ${ya}${Yy+=1} ${prefix}toxic${ya}
│ ${ya}${Yy+=1} ${prefix}strawberry${ya}
│ ${ya}${Yy+=1} ${prefix}box3d${ya}
│ ${ya}${Yy+=1} ${prefix}roadwarning${ya}
│ ${ya}${Yy+=1} ${prefix}breakwall${ya}
│ ${ya}${Yy+=1} ${prefix}icecold${ya}
│ ${ya}${Yy+=1} ${prefix}luxury${ya}
│ ${ya}${Yy+=1} ${prefix}cloud${ya}
│ ${ya}${Yy+=1} ${prefix}summersand${ya}
│ ${ya}${Yy+=1} ${prefix}horrorblood${ya}
│ ${ya}${Yy+=1} ${prefix}thunder${ya}
└──────
┌──『 ${ya}Random Foto${ya} 』
│ ${ya}${Yy+=1} ${prefix}hentai${ya}
│ ${ya}${Yy+=1} ${prefix}ahegao${ya}
│ ${ya}${Yy+=1} ${prefix}ass${ya}
│ ${ya}${Yy+=1} ${prefix}bdsm${ya}
│ ${ya}${Yy+=1} ${prefix}cuckold${ya}
│ ${ya}${Yy+=1} ${prefix}cum${ya}
│ ${ya}${Yy+=1} ${prefix}ero${ya}
│ ${ya}${Yy+=1} ${prefix}femdom${ya}
│ ${ya}${Yy+=1} ${prefix}foot${ya}
│ ${ya}${Yy+=1} ${prefix}gangbang${ya}
│ ${ya}${Yy+=1} ${prefix}glasses${ya}
│ ${ya}${Yy+=1} ${prefix}jahy${ya}
│ ${ya}${Yy+=1} ${prefix}masturbation${ya}
│ ${ya}${Yy+=1} ${prefix}orgy${ya}
│ ${ya}${Yy+=1} ${prefix}panties${ya}
│ ${ya}${Yy+=1} ${prefix}pussy${ya}
│ ${ya}${Yy+=1} ${prefix}thighs${ya}
│ ${ya}${Yy+=1} ${prefix}yuri${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaper${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapermeme${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperprogamer${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapergamer${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperanime${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperteknologi${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapercyber${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperinori${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperislami${ya}
│ ${ya}${Yy+=1} ${prefix}darkjokes${ya}
│ ${ya}${Yy+=1} ${prefix}meme${ya}
│ ${ya}${Yy+=1} ${prefix}hsdxd${ya}
│ ${ya}${Yy+=1} ${prefix}sao${ya}
│ ${ya}${Yy+=1} ${prefix}lovelive${ya}
│ ${ya}${Yy+=1} ${prefix}translate${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest${ya}
│ ${ya}${Yy+=1} ${prefix}ppcouple${ya}
│ ${ya}${Yy+=1} ${prefix}hijaber${ya}
│ ${ya}${Yy+=1} ${prefix}cecan${ya}
│ ${ya}${Yy+=1} ${prefix}cecan2${ya}
│ ${ya}${Yy+=1} ${prefix}cogan${ya}
│ ${ya}${Yy+=1} ${prefix}waifu${ya}
│ ${ya}${Yy+=1} ${prefix}loli${ya}
│ ${ya}${Yy+=1} ${prefix}husbu${ya}
│ ${ya}${Yy+=1} ${prefix}milf${ya}
│ ${ya}${Yy+=1} ${prefix}cosplay${ya}
│ ${ya}${Yy+=1} ${prefix}wallml${ya}
│ ${ya}${Yy+=1} ${prefix}art${ya}
│ ${ya}${Yy+=1} ${prefix}bts${ya}
│ ${ya}${Yy+=1} ${prefix}exo${ya}
│ ${ya}${Yy+=1} ${prefix}elf${ya}
│ ${ya}${Yy+=1} ${prefix}neko${ya}
│ ${ya}${Yy+=1} ${prefix}shota${ya}
│ ${ya}${Yy+=1} ${prefix}sagiri${ya}
│ ${ya}${Yy+=1} ${prefix}shinobu${ya}
│ ${ya}${Yy+=1} ${prefix}megumin${ya}
│ ${ya}${Yy+=1} ${prefix}wallnime${ya}
│ ${ya}${Yy+=1} ${prefix}chiisaihentai${ya}
│ ${ya}${Yy+=1} ${prefix}trap${ya}
│ ${ya}${Yy+=1} ${prefix}blowjob${ya}
│ ${ya}${Yy+=1} ${prefix}yaoi${ya}
│ ${ya}${Yy+=1} ${prefix}ecchi${ya}
│ ${ya}${Yy+=1} ${prefix}ahegao${ya}
│ ${ya}${Yy+=1} ${prefix}hololewd${ya}
│ ${ya}${Yy+=1} ${prefix}sideoppai${ya}
│ ${ya}${Yy+=1} ${prefix}animefeets${ya}
│ ${ya}${Yy+=1} ${prefix}animebooty${ya}
│ ${ya}${Yy+=1} ${prefix}animethighss${ya}
│ ${ya}${Yy+=1} ${prefix}hentaiparadise${ya}
│ ${ya}${Yy+=1} ${prefix}animearmpits${ya}
│ ${ya}${Yy+=1} ${prefix}hentaifemdom${ya}
│ ${ya}${Yy+=1} ${prefix}lewdanimegirls${ya}
│ ${ya}${Yy+=1} ${prefix}biganimetiddies${ya}
│ ${ya}${Yy+=1} ${prefix}animebellybutton${ya}
└──────
┌──『 ${ya}Random Video${ya} 』
│ ${ya}${Yy+=1} ${prefix}storyanime${ya}
│ ${ya}${Yy+=1} ${prefix}asupan${ya}
│ ${ya}${Yy+=1} ${prefix}asupan2${ya}
│ ${ya}${Yy+=1} ${prefix}asupan3${ya}
│ ${ya}${Yy+=1} ${prefix}bokep${ya}
│ ${ya}${Yy+=1} ${prefix}bocil${ya}
│ ${ya}${Yy+=1} ${prefix}santuy${ya}
│ ${ya}${Yy+=1} ${prefix}ukhty${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~` , `© ZakBotz - MD`, [
{"urlButton": {"displayText": "MyYoutube Bantu Subscribe","url": `https://youtu.be/Sk6Mt9Hyytc`}},
{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},
{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},
{"quickReplyButton": {"displayText": "Creditz","id": 'credit'}}] )
break

case 'ff':
if (args.length == 0) return  replyNya(` masukan id

versi 1 :
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

pembayaran via :
DANA : 0881036690566
`)
break


case 'ml':
if (args.length == 0) return  replyNya(` masukan id+server

versi 1 :
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

versi 2 :
√ 600 💎 : 150.000
√ 706 💎 : 157.000
√ 878 💎 : 193.000
√ 963 💎 : 216.200
√ 1010 💎 : 253.500
√ 1220 💎 : 298.200

pembayaran via :
DANA : 0881036690566
`)
break

case 'storemenu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `MAU BELANJA APA KAK`,
                    description: `PILIH DISINI`,
                    buttonText: "SELECT STORE",
                    footerText: "*By YUDHA PERDANA*\n*By BloodSword*",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Bot Features",
								"rows": [
									{
										"title": "DIAOMOND FREE FIRE",
										 //"description": "displays the list Of Diamond Free Fire",
										"rowId": `${prefix}ff`
									},
									{
										"title": "DIAMOND MOBILE LEGENDS",
										 //"description": "displays the list Of Diamond Mobile Legends",
										"rowId": `${prefix}ml`
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

case 'credit':
await kirbotz.send5ButGif(from, `*TERIMAKASIH KEPADA:*

*ATHOR AND DEVELOPER SC*
• Allah
• Yudha
• BloodSword
• Akira

*SUPORT AND APIKEY*
• WhatsApp
• Adiwasjhing
• Lolhuman
• Dapuhy
` , `© ZakBotz - MD'`, [
{"urlButton": {"displayText": "Instagram Owner","url": `https://instagram.com/demo_ngki`}},
{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
break
case 'public': {
if (!isCreator) throw mess.owner
kirbotz.public = true
replyNya('Sukse Kak')
}
break
case 'self': {
if (!isCreator) throw mess.owner
kirbotz.public = false
replyNya('Sukses Kak')
}
break
case 'owner': case 'creator': {
kirbotz.sendContact(m.chat, global.owner, m)
}
break
case 'tourl': {
                replyNya(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./Lib/uploader')
                let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyNya(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
   case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            replyNya(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./Lib/converter')
            let audio = await toAudio(media, 'mp4')
            kirbotz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${kirbotz.user.name}.mp3`}, { quoted : m })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replyNya(mess.wait)
		let { webp2mp4File } = require('./Lib/uploader')
                let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kirbotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
replyNya(mess.wait)
let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
kirbotz.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break

case 'faktaunik': 
case 'katabijak': 
case 'pantun': 
case 'bucin': {
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: get_result.result,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'asmaulhusna': {
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'kisahnabi':
if (args.length == 0) return replyNya(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
replyNya(ini_txt)
break
case 'jadwalsholat':	
if (args.length == 0) return replyNya(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.maghrib}\n`
ini_txt += `Isya : ${get_result.isya}`
replyNya(ini_txt)
break
case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
replyNya(ini_txt)
break
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
kirbotz.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => replyNya(oh))
}
break
case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan Tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis Yang Ke Berapa?\n\nContoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
replyNya(`No. ${number}

${arab}

${id}`)
} catch (e) {
replyNya(`Hadis tidak ditemukan !`)
}
}
break
case 'juzamma': {
if (args[0] === 'pdf') {
replyNya(mess.wait)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
replyNya(mess.wait)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
replyNya(mess.wait)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
replyNya(mess.wait)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
replyNya(`Mau Format Apa ? Example : ${prefix + command} pdf

Format Yang Tersedia : pdf, docx, pptx, xlsx`)
}
}
break
//=================Sticker Menu
//==============
 case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await kirbotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kirbotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyNya('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kirbotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'attp':
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
kirbotz.sendMessage(m.chat, { sticker: gehdhe }, { quoted: fakekirbotz })
break
case 'ttp':
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
veireuue = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURI(q)}`)
kirbotz.sendMessage(m.chat, { sticker: veireuue }, { quoted: fakekirbotz })
break
case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'handhold':
replyNya(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
kirbotz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'emoji':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} 🗿`)
titor = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${encodeURI(q)}?apikey=${lolkey}`)
let encmedia = await kirbotz.sendImageAsSticker(m.chat, titor, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
break
case 'dadu':
case 'patrick':
case 'amongus':
case 'gawrgura':
case 'anjing':
case 'bucinstick':
replyNya(mess.wait)
let buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=${lolkey}`)
kirbotz.sendMessage(m.chat, { sticker: buffer }, { quoted: fakekirbotz })
break
//=============Maker Menu
//=============
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':{
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks`)
replyNya(mess.wait)
txt1 = args[0]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: '© ZakBotz - MD',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/demongki'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':{
if (args.length == 0) return replyNya(`Example: ${prefix + command} teks`)
replyNya (mess.wait)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/demongki'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'cecan':
case 'cogan':{
replyNya(mess.wait)
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: '© ZakBotz - MD',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/demongki'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'neko':
case 'waifu':
case 'trap':
case 'chiisaihentai':
case 'blowjob':
case 'milf':
case 'ecchi':
case 'yaoi':
case 'hentai':
case 'ahegao':
case 'hentai4everyone':
case 'loli':{
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: '© ZakBotz - MD',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/demongki'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'donate': 
case 'bayar': {
donte = `_Mau ${command} Scan Di Atas Kak_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/yudha.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: '© ZakBotz - MD',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/demongki'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
replyNya(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await kirbotz.groupAcceptInvite(result).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
}
break
case 'pinterest': {
replyNya(mess.wait)
anu = await pinterest(text)
result = anu[Math.floor(Math.random(), anu.length)]
kirbotz.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await kirbotz.groupInviteCode(m.chat)
kirbotz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                kirbotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await kirbotz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyNya(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Script',
                                    url: 'https://github.com/demongki/new'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./Image/kirbotz.jpg')
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      kirbotz.send5ButImg(i, txt, kirbotz.user.name, fatihgans, btn)
                    }
                replyNya(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
case 'bcimg': case 'bcvidio': case 'bcaudio': {
                if (!isCreator) throw mess.owner
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`
                let getGroups = await kirbotz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyNya(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                    displayText: 'My Youtube',
                                    url: 'https://youtube.com/dhabotz/'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'COMMAND',
                                    id: 'menu'
                                }
                            }]
                    let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    kirbotz.sendMessage(i, { sticker: { url: media } }, { quoted: m })
                    } else if (/image/.test(mime)) {
                    let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
                    kirbotz.send5ButImg(i, junn, `${global.footer}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
                    kirbotz.send5Vid(i, junn, `${global.footer}`, buffer, butoon)
                    } else if (/audio/.test(mime)) {
                    kirbotz.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : m })
                    } else {
                    replyNya(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                replyNya(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                replyNya(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		console.log(chalk.black(chalk.bgWhite('[ Otw Kirim Broadcast ]')))
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script',
                                    url: 'https://github.com/demongki/new'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./Image/kirbotz.jpg')
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      kirbotz.send5Loc(yoi, txt, `Broadcast Bot ${global.pengguna}`, fatihgans, btn)
		}
		replyNya('Sukses Broadcast')
		console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
            }
            break
case 'bctext': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                replyNya(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		console.log(chalk.black(chalk.bgWhite('[ Otw Kirim Broadcast ]')))
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script',
                                    url: 'https://github.com/demongki/new'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 Broadcast Text 」\n\n${text}`
                      textTemplateButtons(yoi, txt, `Broadcast Bot ${global.pengguna}`, btn)
		}
		replyNya('Sukses Broadcast')
		console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
            }
            break                  
case 'antilink':
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isGroupOwner && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antilink) return replyNya('Sudah Aktif Sebelumnya')
global.db.data.chats[m.chat].antilink = true
replyNya(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].antilink) return replyNya('Sudah Nonaktif Sebelumnya')
global.db.data.chats[m.chat].antilink = false
replyNya(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Antilink`, kirbotz.user.name, m)
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await kirbotz.groupSettingUpdate(m.chat, 'announcement').then((res) => replyNya(`Sukses Menutup Group`)).catch((err) => replyNya(jsonformat(err)))
} else if (args[0] === 'open'){
await kirbotz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyNya(`Sukses Membuka Group`)).catch((err) => replyNya(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Group`, kirbotz.user.name, m)
}
}
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee Yang Jadian💖 Jangan Lupa Pajak Jadiannya Yaa🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, jawab, kirbotz.user.name, m, {mentions: menst})
}
break
case 'add': {
if (!m.isGroup) throw mess.group
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!q) throw `Teks?`
let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
kirbotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
kirbotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
}
break
case 'goblokcek': case 'jelekcek': case 'gaycek':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
if (args.length < 1) return replyNya(`Contoh : ${prefix + command} KirBotz`)
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
kirbotz.sendMessage(m.chat, { text: `${yn}%` }, { quoted: fakekirbotz })
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!text) throw `Kirim/Reply Teks Dengan Caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
replyNya(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break

case 'play':
if (args.length < 2) return replyNya(`Kirim perintah ${command} query\nContoh : ${command} dj sad`)
replyNya(mess.wait)
await sendPlay(from, q)
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
kirbotz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP4\n✇ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'xnxxsearch':
replyNya(mess.wait)
                    if (args.length == 0) return replyNya(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    csksyu = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    csksyz = csksyu.result
                    ini_txt = ""
                    for (var x of csksyz) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xnxxvideo [link]`
kirbotz.sendMessage(from, { text: anu }, { quoted: fakekirbotz })
break
case 'xnxxvideo':
replyNya(mess.wait)
if (args.length == 0) return replyNya(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    kohr = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    kohl = kohr.result
                    ini_txt = `Title : ${kohl.title}\n`
                    ini_txt += `Duration : ${kohl.duration}\n`
                    ini_txt += `View : ${kohl.view}\n`
                    ini_txt += `Rating : ${kohl.rating}\n`
                    ini_txt += `Like : ${kohl.like}\n`
                    ini_txt += `Dislike : ${kohl.dislike}\n`
                    ini_txt += `Comment : ${kohl.comment}\n`
                    ini_txt += `Tag : ${kohl.tag.join(", ")}\n`
                    ini_txt += `Description : ${kohl.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = kohl.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    fott = await getBuffer(kohl.thumbnail)
                    await kirbotz.sendMessage(m.chat, { image: fott, caption: ini_txt }, { quoted: fakekirbotz})                  
                    break

case 'ytmp3': case 'ytaudio': {
let { yta } = require('./Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
kirbotz.sendImage(m.chat, media.thumb, `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '128kbps'}`, m)
kirbotz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _Miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
replyNya(respon)
}
break

case 'p':
reply('halo')
break

case 'ssweb': {
		if(args.length < 1) return replay(`Url Nya Mana?`)
		anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${text}&apikey=IkyOgiwara`)
	let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: anu ,
                    caption: `Ssweb Url ( HP )`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                kirbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
case 'igfoto':{
if (!text) throw 'Link Nya?'
replyNya(mess.wait)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/instagram/photo?url=${text}&apikey=IkyOgiwara`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: anu }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}allmenu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break         
case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await kirbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
                kirbotz.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
break
case 'tiktok': case 'tiktoknowm': {
if (!text) throw 'Masukkan Query Link!'
anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${text}`)
let message = await prepareWAMessageMedia({ video : { url: anu.result.link } }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: `Download From ${text}`,
hydratedFooterText: `Klik Button Di Bawah`,
hydratedButtons: [{ urlButton: { displayText: 'Source Video', url: `${text}` } },
{ quickReplyButton: { displayText: '⇄   ◃◃   ⅠⅠ   ▹▹   ↻', id: `${prefix}tiktokaudio ${text}` } }]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require('yt-search')
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
kirbotz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'ppcouple': {
replyNya(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
kirbotz.sendMessage(m.chat, { image: { url: random.male }, caption: `Foto Couple Male` }, { quoted: m })
kirbotz.sendMessage(m.chat, { image: { url: random.female }, caption: `Fofo Couple Female` }, { quoted: m })
}
break
case 'tiktokstalk':{
if (args.length == 0) return replyNya(`Example: ${prefix + command} namatt`)
replyNya(mess.wait)
ttk = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${ttk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `Username : ${get_result.username}\n`
txt += `Nickname : ${get_result.nickname}\n`
txt += `Bio : ${get_result.bio}\n`
txt += `Followers : ${get_result.followers}\n`
txt += `Following : ${get_result.followings}\n`
txt += `Likes : ${get_result.likes}\n`
txt += `Vidio : ${get_result.video}\n`
buffer = await getBuffer(get_result.user_picture)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: '© ZakBotz - MD',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/demongki'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'githubstalk':{
if (args.length == 0) return replyNya(`Example: ${prefix + command} namagh`)
replyNya(mess.wait)
ghk = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/github/${ghk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `Full : ${get_result.name}\n`
txt += `Followers : ${get_result.followers}\n`
txt += `Following : ${get_result.following}\n`
txt += `Publick : ${get_result.public_repos}\n`
txt += `Public Gits : ${get_result.public_gists}\n`
txt += `User : ${get_result.user}\n`
txt += `Compi : ${get_result.company}\n`
txt += `Lokasi : ${get_result.location}\n`
txt += `Email : ${get_result.email}\n`
txt += `Bio : ${get_result.bio}\n`
buffer = await getBuffer(get_result.avatar)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: '© ZakBotz - MD',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/demongki'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'igstalk':{
if (args.length == 0) return replyNya(`Example: ${prefix + command} namaig`)
replyNya(mess.wait)
igk = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${igk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `Link : https://www.instagram.com/${get_result.username}\n`
txt += `Full : ${get_result.fullname}\n`
txt += `Post : ${get_result.posts}\n`
txt += `Followers : ${get_result.followers}\n`
txt += `Following : ${get_result.following}\n`
txt += `Bio : ${get_result.bio}\n`
buffer = await getBuffer(get_result.photo_profile)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: '© ZakBotz - MD',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/demongki'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ytstalk':
if (args.length == 0) return replyNya(`Example: ${prefix + command} namachannel`)
replyNya(mess.wait)
ytk = args.join(" ")
anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`)
cari = '↻↻↻↻↻\n'
for (let search of anu.result) {
cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
}
replyNya(cari.trim())
break
case 'asupan': case 'asupan2':{
replyNya(mess.wait)
hasilnya = await getBuffer(`https://api.zacros.my.id/asupan/random`)
let btn = [{
                                urlButton: {
                                    displayText: 'Owner',
                                    url: `wa.me/62881036690566`
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      kirbotz.send5Vid(m.chat, `Nih Kak`, kirbotz.user.name, hasilnya, btn)
                      }
                      break
case 'asupan3':{
 replyNya(mess.wait)

hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
kirbotz.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `asupan.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'ukhty':{
 replyNya(mess.wait)

hasily = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ukty?apikey=SpyBotApi`)
kirbotz.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'santuy':{
 replyNya(mess.wait)

hasily = await fetchJson(`https://raku-web.herokuapp.com/api/asupan/santuy?apikey=RakuKeyTod`)
kirbotz.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'bocil':{
 replyNya(mess.wait)

hasily = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/bocil?apikey=SpyBotApi`)
kirbotz.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'bokep':{
 replyNya(mess.wait)

dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
kirbotz.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: fakekirbotz })
}
break
case 'storyanime':{
 replyNya(mess.wait)
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
kirbotz.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `storyanime.mp4`, caption: `Nih Story Animenya` }, { quoted: fakekirbotz })
}
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
