'use strict'

const Event = use('Event')
const Env = use('Env')
const User = use('App/Models/User')

class AuthController {

  async register({ request, response }) {
    const user = await User.create(request.only(['name', 'email', 'password']))
    const dataEmail = {
      url: `${Env.get('APP_URL')}/activation/${user.id}`,
      name: user.name,
      email: user.email
    }
    Event.fire('email::activation', dataEmail)
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
