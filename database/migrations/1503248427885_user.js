'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.uuid('id').notNullable().primary()
      table.string('name', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.text('avatar')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
