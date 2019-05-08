'use strict'

const Hash = use('Hash')
const Helpers = use('Helpers')
const uuidv1 = require('uuid/v1')

class ProfilController {

  async getProfil({ auth, view }) {
    const user = await auth.getUser()
    return view.render('page.profil', { user: user })
  }

  async updateProfil(ctx) {
    const user = await ctx.auth.getUser()
    user.merge(ctx.request.only(['name', 'email']))
    await user.save()
    ctx.session.flash({ success: 'Berhasil Update Profil' })
    ctx.response.route('profil.profil')
  }

  async passwordProfil(ctx) {
    const user = await ctx.auth.getUser()
    const verif = await Hash.verify(ctx.request.input('password'), user.password)

    if (!verif) {
      ctx.session.withErrors([{ field: 'password', message: 'password tidak valid' }])
      ctx.response.redirect('back')
    }
    else {
      const newPassword = await Hash.make(ctx.request.input('password_new'))
      user.merge({ password: newPassword })
      await user.save()
      ctx.session.flash({ success: 'Berhasil Update Password' })
      ctx.response.route('profil.profil')
    }

  }

  async changeAvatar(ctx) {
    const imageAvatar = ctx.request.file('avatar')
    const imageName = `${uuidv1()}.${imageAvatar.extname}`

    await imageAvatar.move(Helpers.publicPath('image/avatars'), {
      name: imageName,
      overwrite: true
    })

    if (!imageAvatar.moved()) {
      ctx.session.flash({ fail: 'Gagal Update Foto Profil' })
      ctx.response.route('profil.profil')
    }
    else {
      const user = await ctx.auth.getUser()
      user.merge({ avatar: imageName })
      await user.save()
      ctx.session.flash({ success: 'Berhasil Update Foto Profil' })
      ctx.response.route('profil.profil')
    }

  }


}

module.exports = ProfilController
