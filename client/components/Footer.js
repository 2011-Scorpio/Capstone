import React from 'react'
import {GitHub} from 'react-feather'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="f jcb aic">
      <div className="footer-links">
        <Link to="/about">About</Link>
        <a href="mailto: emailomakase@gmail.com">Email Us</a>
      </div>

      <a
        href="https://github.com/2011-Scorpio/Capstone"
        className="footer-github f jcc aic"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub />
      </a>
    </footer>
  )
}

export default Footer
