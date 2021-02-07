import React from 'react'
import {GitHub} from 'react-feather'
import {Link} from 'react-redux'

const Footer = () => {
  return (
    <footer className="f jcb aic">
      <ul>
        <li>About</li>
        <li>Email Us</li>
      </ul>
      <div className="footer-github f jcc aic">
        <GitHub />
      </div>
    </footer>
  )
}

export default Footer
