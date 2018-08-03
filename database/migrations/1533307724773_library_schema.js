'use strict'

const Schema = use('Schema')

class LibrarySchema extends Schema {
  up () {
    this.create('libraries', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('game_id').unsigned().references('id').inTable('games')
      table.enu('status', [
        'want',
        'playing',
        'played'
      ])
      table.timestamps()
    })
  }

  down () {
    this.drop('libraries')
  }
}

module.exports = LibrarySchema
