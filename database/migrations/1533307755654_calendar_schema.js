'use strict'

const Schema = use('Schema')

class CalendarSchema extends Schema {
  up () {
    this.create('calendars', (table) => {
      table.increments()
      table.integer('game_id').unsigned().references('id').inTable('games')
      table.integer('user_id').nullable().unsigned().references('id').inTable('users')
      table.string('title')
      table.text('description')
      table.dateTime('date')
      table.timestamps()
    })
  }

  down () {
    this.drop('calendars')
  }
}

module.exports = CalendarSchema
