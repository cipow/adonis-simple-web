'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MerchantSchema extends Schema {
  up () {
    this.create('merchants', (table) => {
      table.uuid('id').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('merchants')
  }
}

module.exports = MerchantSchema
