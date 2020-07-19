const mailer = require('nodemailer')
const htmlToFormattedText = require('html-to-formatted-text')
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]

const transport = mailer.createTransport({
    host: config.mailer.host,
    auth: {
        user: config.mailer.user,
        pass: config.mailer.pass
    }
})

const from = config.mailer.from

module.exports = {
    send: (to, subject, html) => {
        transport.sendMail({
            from,
            to,
            subject,
            html,
            text: htmlToFormattedText(html)
        })
    }
}