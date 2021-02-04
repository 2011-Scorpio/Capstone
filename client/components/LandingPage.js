import React from 'react'
import ButtonOne from './ButtonOne'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <div className="landing-img-wrapper">
        <img
          className="landing-img"
          src="https://i.stack.imgur.com/y9DpT.jpg"
          alt=""
        />
        <h3 className="landing-quote">A Simpler Way to Discover Music</h3>
      </div>
      <div className="landing-btn-container f jcc aic">
        <Link to="/explore">
          <ButtonOne text="Explore" />
        </Link>
      </div>
    </>
  )
}

export default LandingPage
