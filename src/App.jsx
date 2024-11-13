import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  

  return (
    <div className=' bg-grayishPurple'>
      <div className="w-[90%] mx-auto">
        <Header />
        <Hero />
      </div>
      {/* <div className="oval-container">
      Recent Projects
      <span className="third-oval"></span>
    </div> */}
    </div>
  )
}

export default App
