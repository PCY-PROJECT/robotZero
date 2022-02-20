const telegram = require('telegram-bot-api') //2.0.0
const Agent = require('socks5-https-client/lib/Agent');


const teleBotToken = "5295423621:AAHqf4MC-zeaIqbaimkGLB8IYITLF6ivzKE" // 换成你的Token
const api = new telegram({ token: teleBotToken })
const mp = new telegram.GetUpdateMessageProvider()
api.setMessageProvider(mp)

api.start().then(() => {
    console.log('API is started')
})
.catch(console.err)

api.on('update', update => {
    // 处理信息逻辑
    let message = update.message
    if (message.text) {
        const msgParam = {
            chat_id: message.chat.id,
            text: message.text
        }
        api.sendMessage(msgParam)
    }
})