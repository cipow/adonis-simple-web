'use strict'

class UserUpdateProfil {

  get validateAll() {
    return true
  }

  get rules () {
    return {
      name: 'required',
      email: 'required|email'
    }
  }

  get messages() {
    return {
      'name.required': 'Nama diperlukan',
      'email.required': 'Email diperlukan',
      'email.email': 'Format Email tidak valid'
    }
  }
}

module.exports = UserUpdateProfil
