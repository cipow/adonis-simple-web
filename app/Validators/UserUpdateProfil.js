'use strict'

class UserUpdateProfil {

  get validateAll() {
    return true
  }

  get rules () {
    return {
      name: 'required',
      email: `required|email|unique:users,email,id,${this.ctx.auth.user.id}`
    }
  }

  get messages() {
    return {
      'name.required': 'Nama diperlukan',
      'email.required': 'Email diperlukan',
      'email.email': 'Format Email tidak valid',
      'email.unique': 'Email sudah digunakan orang lain'
    }
  }
}

module.exports = UserUpdateProfil
