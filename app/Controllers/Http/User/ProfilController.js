'use strict'

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
    const Hash = use('Hash')
    const user = await ctx.auth.getUser()
    const verif = await Hash.verify(ctx.request.password, user.password)

    if (!verif) {
      ctx.session.withErrors([{ field: 'password', message: 'password tidak valid' }])
      ctx.response.redirect('back')
    }
    else {
      const newPassword = await Hash.make(ctx.request.password_new)
      user.merge({ password: newPassword })
      await user.save()
      ctx.session.flash({ success: 'Berhasil Update Password' })
      ctx.response.route('profil.profil')
    }

  }


}

module.exports = ProfilController
