const passport = require('passport')
const router = require('express').Router()
const SpotifyStrategy = require('passport-spotify').Strategy
const {User} = require('../db/models')
module.exports = router

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

// if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
//   console.log('Google client ID / secret not found. Skipping Google OAuth.')
// } else {
//   const googleConfig = {
//     clientID: process.env.CLIENTID,
//     clientSecret: process.env.SECRET,
//     callbackURL: 'localhost:8080'
//   }

//   const strategy = new GoogleStrategy(
//     googleConfig,
//     (token, refreshToken, profile, done) => {
//       const googleId = profile.id
//       const email = profile.emails[0].value
//       const imgUrl = profile.photos[0].value
//       const firstName = profile.name.givenName
//       const lastName = profile.name.familyName
//       const fullName = profile.displayName

//       User.findOrCreate({
//         where: {googleId},
//         defaults: {email, imgUrl, firstName, lastName, fullName}
//       })
//         .then(([user]) => done(null, user))
//         .catch(done)
//     }
//   )

//   passport.use(strategy)

//   router.get(
//     '/',
//     passport.authenticate('google', {scope: ['email', 'profile']})
//   )

//   router.get(
//     '/callback',
//     passport.authenticate('google', {
//       successRedirect: '/home',
//       failureRedirect: '/login'
//     })
//   )
// }

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.SECRET,
      callbackURL: 'http://localhost:8080/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      console.log(
        'profile',
        profile,
        'accessToken',
        accessToken,
        'refreshToken',
        refreshToken
      )
      User.findOrCreate({
        where: {spotifyId: profile.id},
        defaults: {email: profile._json.email}
      }).then(function(err, user) {
        return done(err, user)
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
