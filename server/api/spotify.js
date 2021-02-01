const router = require('express').Router()
const request = require('request')
module.exports = router

const SpotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  redirectUri: 'localhost:8080'
})

router.get('/token', function(req, resp) {
  resp.header('Access-Control-Allow-Origin', '*')
  resp.header('Access-Control-Allow-Headers', 'X-Requested-With')

  var client_id = process.env.CLIENTID
  var client_secret = process.env.SECRET

  // your application requests authorization
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(client_id + ':' + client_secret).toString('base64')
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  }

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      resp.json({token: body.access_token})
    }
  })
})
