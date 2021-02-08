import React from 'react'

const Login = () => {
  return (
    <div className="login-form">
      <div>
        <img className="spotify-logo" src="/images/spotify.png" alt="" />
      </div>
      <div>
        <a href="/auth/spotify" className="button-two">
          Log In
        </a>
      </div>
    </div>
  )
}

export default Login
