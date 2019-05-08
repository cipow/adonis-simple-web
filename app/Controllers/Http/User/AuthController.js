'use strict'

const User = use('App/Models/User')

class AuthController {

  async register({ request, response }) {
    const user = await User.create(request.only(['name', 'email', 'password']))
    response.route('landing-page')
  }

  async login({ auth, request, response }) {
    const { email, password } = request.all()
    await auth.authenticator('session').attempt(email, password)
    response.route('landing-page')
  }

  async logout({ auth, response }) {
    await auth.logout()
    response.route('landing-page')
  }
}

module.exports = AuthController
