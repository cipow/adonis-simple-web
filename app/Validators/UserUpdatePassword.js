'use strict'

class UserUpdatePassword {
  get validateAll() {
    return true
  }

  get rules () {
    return {
      password: 'required|min:6|max:32',
      password_new: 'required|min:6|max:32'
    }
  }

  get messages() {
    return {
      'password.required': 'Password diperlukan',
      'password.min': 'Password minimal 6 karakter',
      'password.max': 'Password maksimal 32 karakter',
      'password_new.required': 'Password baru diperlukan',
      'password_new.min': 'Password baru minimal 6 karakter',
      'password_new.max': 'Password baru maksimal 32 karakter',
    }
  }
}

module.exports = UserUpdatePassword
