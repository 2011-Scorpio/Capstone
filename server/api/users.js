const router = require('express').Router()
const {User, Playlist} = require('../db/models')
module.exports = router

router.get('/:songId', async (req, res, next) => {
  try {
    const song = await `https://api.spotify.com/v1/tracks/${req.params.songId}`
    res.json(song)
  } catch (error) {
    next(error)
  }
})
