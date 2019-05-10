'use strict'

const Event = use('Event')
const Env = use('Env')
const Hash = use('Hash')
const Helpers = use('Helpers')
const uuidv1 = require('uuid/v1')
const User = use('App/Models/User')

class ProfilController {

  async getProfil({ auth, view }) {
    const user = await auth.getUser()
    return view.render('page.profil', { user: user })
  }

  async updateProfil(ctx) {
    const email = ctx.request.input('email')
    const user = await ctx.auth.getUser()
    if (email != user.email) await User.query().where('id', user.id).update({ is_active: false})
    await User.query().where('id', user.id).update(ctx.request.only(['name', 'email']))
    ctx.session.flash({ success: 'Berhasil Update Profil' })
    ctx.response.route('profil.profil')
  }

  async passwordProfil(ctx) {
    const verif = await Hash.verify(ctx.request.input('password'), ctx.auth.user.password)

    if (!verif) {
      ctx.session.withErrors([{ field: 'password', message: 'password tidak valid' }])
      ctx.response.redirect('back')
    }
    else {
      const newPassword = await Hash.make(ctx.request.input('password_new'))
      await User.query().where('id', ctx.auth.user.id).update({ password: newPassword })
      ctx.session.flash({ success: 'Berhasil Update Password' })
      ctx.response.route('profil.profil')
    }

  }

  resendEmail(ctx) {
    const user = ctx.auth.user
    const dataEmail = {
      url: `${Env.get('APP_URL')}/activation/${user.id}`,
      name: user.name,
      email: user.email
    }
    Event.fire('email::activation', dataEmail)
    ctx.session.flash({ success: 'Berhasil Kirim Ulang Email' })
    ctx.response.route('profil.profil')
  }

  async changeAvatar(ctx) {
    const pathAvatar = 'image/avatars'
    const imageAvatar = ctx.request.file('avatar')
    const imageName = `${uuidv1()}.${imageAvatar.extname}`

    await imageAvatar.move(Helpers.publicPath(pathAvatar), {
      name: imageName,
      overwrite: true
    })

    if (!imageAvatar.moved()) {
      ctx.session.flash({ fail: 'Gagal Update Foto Profil' })
      ctx.response.route('profil.profil')
    }
    else {
      const avatarBefore = ctx.auth.user.avatar
      if (avatarBefore) Event.fire('image-delete', `${pathAvatar}/${avatarBefore}`)
      await User.query().where('id', ctx.auth.user.id).update({ avatar: imageName })
      ctx.session.flash({ success: 'Berhasil Update Foto Profil' })
      ctx.response.route('profil.profil')
    }

  }


}

module.exports = ProfilController
