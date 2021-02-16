import React from 'react'

const Login = () => {
  return (
    <div className="login-form">
      <div id="spotify-logo-container">
        <img className="spotify-logo" src="/images/spotify.png" alt="" />
      </div>
      <a href="/auth/spotify" className="button-two">
        Log in to Spotify
      </a>
    </div>
  )
}

export default Login
