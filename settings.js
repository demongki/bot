const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	webnya: 'https://api.lolhuman.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.lolhuman.xyz': 'NgentotRusa',
}

// Other
global.owner = ['62881036690566']
global.premium = ['62881036690566']
global.namaOwner = 'ZAKKY'
global.packname = 'Created'
global.author = 'ZakBotz  MD'
global.sessionName = 'kirbotz'
global.lolkey = 'RINTISAJA'
global.wame = 'https://wa.me/62881036690566'
global.ownerNumber = ["62881036690566@s.whatsapp.net"]
global.email = 'mbahkonghariono@gmail.com'
global.yt = 'https://youtube.com/channel/amjaykepo'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.pengguna = 'ZakBotz - MD'
global.footer = '© ZakBotz - MD'
global.sp = 'https://amjaykepo.com'
global.mess = {
    success: 'Success 💯',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: '❗Waittt...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./Image/kirbotz.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
