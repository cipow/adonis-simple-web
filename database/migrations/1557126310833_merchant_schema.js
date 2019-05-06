'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MerchantSchema extends Schema {
  up () {
    this.create('merchants', (table) => {
      table.uuid('id').notNullable().primary()
      table.uuid('user_id').references('id').inTable('users').onUpdate('cascade')
      table.string('name', 80).notNullable()
      table.text('logo')
      table.timestamps()
    })
  }

  down () {
    this.drop('merchants')
  }
}

module.exports = MerchantSchema
