const SpotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  redirectUri: 'localhost:8080'
})

spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm').then(
  function(data) {
    console.log('Album information', data.body)
  },
  function(err) {
    console.error(err)
  }
)
