import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Rout from './rout'
import Header from './components/Header.js'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Rout />
      </BrowserRouter>
    </>
  )
}

export default App