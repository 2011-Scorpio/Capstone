import React from 'react'
import {GitHub} from 'react-feather'
import {Link} from 'react-redux'

const Footer = () => {
  return (
    <footer className="f jcb aic">
      <ul>
        <Link to="/about">About</Link>
        <a href="mailto: emailomakase@gmail.com">Email Us</a>
      </ul>

      <a
        href="https://github.com/2011-Scorpio/Capstone"
        className="footer-github f jcc aic"
      >
        <GitHub />
      </a>
    </footer>
  )
}

export default Footer
