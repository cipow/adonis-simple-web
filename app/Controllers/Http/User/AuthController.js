'use strict'

const User = use('App/Models/User')

class AuthController {

  getRegister({ view }) { return view.render('page.register') }

  async register({ request, response }) {
    const user = await User.create(request.only(['name', 'email', 'password']))
    return response.json(user)
  }

  getLogin({ view }) { return view.render('page.login') }

  async login({ auth, request, response }) {
    const { email, password } = request.all()
    await auth.authenticator('session').attempt(email, password)
    return response.json(await auth.authenticator('session').getUser())
  }
}

module.exports = AuthController
