const router = require('express').Router()
const request = require('request')
const SpotifyWebApi = require('spotify-web-api-node')
module.exports = router

const spotifyApi = new SpotifyWebApi()
let apiToken = ''

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
      spotifyApi.setAccessToken(body.access_token)
      apiToken = body.access_token
      resp.json({token: body.access_token})
    }
  })
})

router.get('/albums', async (req, res, next) => {
  try {
    spotifyApi.setAccessToken(apiToken)
    const {data} = spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
    console.log(data)
    res.json(data)
  } catch (error) {
    console.error(error)
  }
})
