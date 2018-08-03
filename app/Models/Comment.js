'use strict'

const Model = use('Model')

class Comment extends Model {
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
   * BelongsTo Post
   * @method post
   *
   * @return {Object}
   */
  post () {
    return this.belongsTo('App/Models/Post')
  }
}

module.exports = Comment
