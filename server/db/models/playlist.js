const db = require('../db')
const Sequelize = require('sequelize')

const Playlist = db.define('playlists', {
  songId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Playlist
