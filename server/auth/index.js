const router = require('express').Router()
module.exports = router

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/spotify', require('./spotify'))
