'use strict'

class Auth {

  async handle ({ auth, response }, next) {
    try {
      await auth.check()
      await next()
    } catch (e) {
      response.route('auth.login.get')
    }
  }
}

module.exports = Auth
