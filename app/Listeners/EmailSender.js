'use strict'

const Mail = use('Mail')

const EmailSender = exports = module.exports = {}

EmailSender.activation = async (data) => {
  await Mail.send('emails.activation', data, (message) => {
    const { email } = data
    message
      .to(email)
      .from('simple-web@web.com')
      .subject('[AdonisJS] Activation Account')
  })
}
