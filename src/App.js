
import './App.css';
import {BsGithub, BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';


function App() {
  const [currentPage, setCurrentPage] = useState('intro')
  const [yPostion, setYPostion] = useState(0)

  useEffect(() => {
    const onScroll = () => setYPostion(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);
  console.log(yPostion)
  return (
    <div className='root-container'>
      <Navbar/>
      {/* Intro */}
      <div id='intro' className='intro-container'>
        <div className='intro-container-left'>
          <div className='intro-phrase'>Hello, I am</div>
          <div className='intro-name-title-container'>
            <div className='intro-name'>Kyle Hannemann</div>
            <div className='intro-title'>Full Stack Software Developer</div>
          </div>
          <div className='intro-contacts'>
            <div><AiOutlineMail size={50}/></div>
            <div><BsGithub size={50}/></div>
            <div><BsInstagram size={50}/></div>
          </div>
        </div>
        <div className='intro-container-right'>
          <div className='intro-picture'></div>
        </div>
      </div>
    {/* Skills */}
      <div id='skills' className='skills-container'>
        
      </div>
    {/* About */}
      <div id='about' className='about-container'>
        
      </div>
    </div>
  );
}

export default App;
