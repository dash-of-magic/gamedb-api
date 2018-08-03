'use strict'

const Schema = use('Schema')

class GamesSchema extends Schema {
  up () {
    this.create('games', (table) => {
      table.increments()
      table.integer('api_id')
      table.string('title')
      table.text('description')
      table.string('developer')
      table.string('publisher')
      table.timestamps()
    })
  }

  down () {
    this.drop('games')
  }
}

module.exports = GamesSchema
