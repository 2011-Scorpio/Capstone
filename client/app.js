import React from 'react'
import {NavBar, ScrollToTop} from './components'
import Routes from './routes'
import '../public/style.scss'

const App = () => {
  return (
    <div>
      {/* <ScrollToTop /> */}
      <NavBar />
      <Routes />
    </div>
  )
}

export default App
