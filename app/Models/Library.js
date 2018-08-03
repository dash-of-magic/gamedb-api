'use strict'

const Model = use('Model')

class Library extends Model {

  /**
   * BelongsTo User
   * @method user
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User')
  }

  /**
   * BelongsTo Game
   * @method game
   *
   * @return {Object}
   */
  game () {
    return this.belongsTo('App/Models/Game')
  }
}

module.exports = Library
