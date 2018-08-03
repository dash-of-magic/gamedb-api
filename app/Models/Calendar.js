'use strict'

const Model = use('Model')

class Calendar extends Model {
  /**
   * BelongsTo Game
   * @method game
   *
   * @return {Object}
   */
  game () {
    return this.belongsTo('App/Models/Game')
  }

  /**
   * BelongsTo User
   * @method user
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Calendar
