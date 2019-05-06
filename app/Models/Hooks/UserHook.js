'use strict'

const Hash = use('Hash')
const uuidv4 = require('uuid/v4')

const UserHook = exports = module.exports = {}

UserHook.register = async (modelInstance) => {
  modelInstance.id = uuidv4()
  modelInstance.password = await Hash.make(modelInstance.password)
}
