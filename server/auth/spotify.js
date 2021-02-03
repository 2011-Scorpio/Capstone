const passport = require('passport')
const router = require('express').Router()
const SpotifyStrategy = require('passport-spotify').Strategy
const {User} = require('../db/models')

module.exports = router

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.SECRET,
      callbackURL: 'http://localhost:8080/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({
        where: {spotifyId: profile.id},
        defaults: {email: profile._json.email, token: accessToken}
      }).then(async function([user]) {
        await user.update({token: accessToken})
        return done(null, user)
      })
    }
  )
)

router.get(
  '/',
  passport.authenticate('spotify', {
    scope: [
      'user-read-email',
      'user-read-private',
      'playlist-modify-public',
      'playlist-modify-private',
      'playlist-read-private',
      'playlist-read-collaborative',
      'user-top-read'
    ]
  })
)

router.get(
  '/callback',
  passport.authenticate('spotify', {
    successRedirect: '/home',
    failureRedirect: '/login'
  })
)
