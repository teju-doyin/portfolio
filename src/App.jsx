import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import { RxDoubleArrowUp } from "react-icons/rx";
import Projects from './components/Projects'
import Contact  from './components/Contact'

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
    <div className="bg-white curved-section">
      <div className=" relative pb-12 rounded-tr-[3rem] rounded-br-[3rem]  border-r-[1px]  border-r-pink bg-offWhite">
        <AboutMe/>
        <div className='w-[98%] relative bottom-20'>
          <RxDoubleArrowUp size={20} className='text-pink bg-white border border-pink rounded-full p-[2px] ml-auto ' />
        </div>
        <Projects/>

      </div>
    </div>
    <div className="bg-offWhite">
      <div className="rounded-tl-[3rem] bg-[#fad5f0]   border-l-[1px]   border-l-pink">
          <Contact/>
      </div>
    </div>
    </ div>
  )
}

export default App
