import React from 'react'
import ButtonOne from './ButtonOne'

/**
 * COMPONENT
 */
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form glass mxa">
        <a href="/auth/spotify">
          <ButtonOne text="Login" href="/auth/spotify" />
        </a>
      </div>
    </div>
  )
}

export default Login
