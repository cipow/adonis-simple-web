'use strict'

class UserRegister {
  get validateAll() {
    return true
  }

  get rules () {
    return {
      email: 'required|email|unique:users,email',
      password: 'required|min:6|max:32',
      name: 'required|string'
    }
  }

  get messages() {
    return {
      'email.required': 'Email diperlukan',
      'email.email': 'Format Email tidak valid',
      'email.unique': 'Email telah terdaftar',
      'password.required': 'Password diperlukan',
      'password.min': 'Password minimal 6 karakter',
      'password.max': 'Password maksimal 32 karakter',
      'name.required': 'Nama diperlukan'
    }
  }
}

module.exports = UserRegister
