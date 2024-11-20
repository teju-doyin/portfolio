import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import { RxDoubleArrowUp } from "react-icons/rx";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 50); 
  };
  

  return (
    <div className='overflow-x-hidden'>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="cursor-pointer text-pink z-30 bg-white border border-pink rounded-full p-[2px] ml-auto fixed bottom-12 right-3"
          aria-label="Scroll to top"
        >
          <RxDoubleArrowUp size={20} />
        </div>
      )}
      <div className="bg-offWhite">
        <div className='bg-white border-l-[1px] border-l-pink rounded-bl-[3rem]'>
          <div className="w-[90%] mx-auto rounded-bl-lg">
            <Header />
            <Hero />
          </div>
        </div>
      </div>
      <div className="bg-white curved-section">
        <div className="relative pb-12 rounded-tr-[3rem] rounded-br-[3rem] border-r-[1px] border-r-pink bg-offWhite">
          <AboutMe />
          <Projects />
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="rounded-tl-[3rem]  bg-[#f8e2f2] border-l-[1px] border-l-pink">
          <div >
            <Contact />
          </div>
          <div className="bg-brown h-[1px] rounded-sm"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
