import React from 'react'
import {NavBar, ScrollToTop, Footer} from './components'
import Routes from './routes'
import '../public/style.scss'

const App = () => {
  return (
    <div className="page-container">
      <ScrollToTop />
      <div>
        <NavBar />
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
