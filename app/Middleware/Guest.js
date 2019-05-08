'use strict'

class Guest {

  async handle ({ auth, response }, next) {
    try {
      await auth.check()
      response.send('anda sudah login')
    } catch (e) {
      await next()
    }
  }
}

module.exports = Guest
