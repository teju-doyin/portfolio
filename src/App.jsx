import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'

function App() {
  

  return (
    <div className='overflow-x-hidden'>
    <div className="bg-offWhite ">
      <div className='bg-white  border-l-[1px] border-l-pink rounded-bl-[3rem]'>
        <div className="w-[90%] mx-auto   rounded-bl-lg ">
          <Header />
          <Hero />
        </div>
        {/* <div className="oval-container">
        Recent Projects
        <span className="third-oval"></span>
        </div> */}
      </div >
    </div>
    <div className="bg-white">
      <div className="pb-12 rounded-tr-[3rem] rounded-br-[3rem]  border-r-[1px]  border-r-pink bg-offWhite">
        <AboutMe/>
      </div>
    </div>
    <div className="bg-offWhite">
      <div className="rounded-tl-[3rem] bg-white  border-l-[1px]   border-l-pink">
        Projects Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum atque, dignissimos deleniti eum vero deserunt sed? Aut, consequuntur quaerat.
      </div>
    </div>
    </ div>
  )
}

export default App
