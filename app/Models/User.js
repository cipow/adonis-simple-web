'use strict'

const Model = use('Model')

class User extends Model {

  static get hidden() {
    return ['password']
  }

  static get incrementing() {
    return false
  }

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'UserHook.register')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
