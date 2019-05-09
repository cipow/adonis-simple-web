'use strict'

class UserChangeAvatar {
  get rules () {
    return {
      avatar: 'required|file|file_ext:jpg,png|file_size:1mb|file_types:image'
    }
  }

  get messages() {
    return {
      'avatar.required': 'File diperlukan'
    }
  }

}

module.exports = UserChangeAvatar
