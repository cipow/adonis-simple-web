'use strict'

class UserLogin {
  get validateAll() {
    return true
  }
  
  get rules () {
    return {
      email: 'required|email',
      password: 'required|min:6|max:32',
    }
  }

  get messages() {
    return {
      'email.required': 'Email diperlukan',
      'email.email': 'Format Email tidak valid',
      'password.required': 'Password diperlukan',
      'password.min': 'Password minimal 6 karakter',
      'password.max': 'Password maksimal 32 karakter'
    }
  }
}

module.exports = UserLogin
