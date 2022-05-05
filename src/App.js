
import './App.css';
import {BsGithub, BsInstagram, BsLinkedin, BsDownload} from 'react-icons/bs'
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

  useEffect(()=>{
    const sections = document.querySelectorAll('.section')
    for (let i = 0; i < sections.length; i++){
      const top = sections[i].offsetTop
      const height = sections[i].clientHeight
      if (yPostion > top - (height/3)){
        setCurrentPage(sections[i].id)
      }
    }
    
  }, [yPostion])


 
  return (
    <div className='root-container'>
      <Navbar active={currentPage}/>
      {/* Intro */}
      <div id='intro' className='intro-container section'>
        <div className='intro-container-left'>
          <div className='intro-phrase'>Hello, I am</div>
          <div className='intro-name-title-container'>
            <div className='intro-name'>Kyle Hannemann</div>
            <div className='intro-title'>Full Stack Software Developer</div>
          </div>
          <div className='intro-contacts'>
            <div><AiOutlineMail size={50}/></div>
            <div><BsGithub size={50}/></div>
            <div><BsLinkedin size={50}/></div>
            <div className='resume-download'><BsDownload size={50}/>
                <span className='resume-download-tooltip'>Download Resume PDF</span>
            </div>
          </div>
        </div>
        <div className='intro-container-right'>
          <div className='intro-picture'></div>
        </div>
      </div>
    {/* Skills */}
      <div id='skills' className='skills-container section'>
        <div className='header'>
          <span></span>
          <div>Skills</div>
          <span></span>
        </div>
      </div>
    {/* About */}
      <div id='about' className='about-container section'>
      <div className='header'>
          <span></span>
          <div>About Me</div>
          <span></span>
        </div>
      </div>
    {/* Projects */}
    <div id='projects' className='projects-container section'>
      <div className='header'>
          <span></span>
          <div>Projects</div>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default App;
