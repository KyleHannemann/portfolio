
import './App.css';
import {BsGithub, BsInstagram, BsLinkedin, BsDownload} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';


function App() {
  const [currentPage, setCurrentPage] = useState('intro')
  const [yPostion, setYPostion] = useState(0)
  const [mobile_menu_active, set_mobile_menu_active] = useState(false)
  const check_navbar_open = (e) => {
    // console.log(e.target.nodeName)
    // Add to if statement below if want to exclude menu items e.target.nodeName !== 'A'
      if (e.target.id !== 'navbar' && mobile_menu_active){
        set_mobile_menu_active(false)
      }
  }
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
    <div className='root-container' onClick={check_navbar_open}>
      <Navbar set_mobile_menu_active={set_mobile_menu_active} active={currentPage} mobile_active={mobile_menu_active}/>
      {/* Intro */}
      <div id='intro' className='intro-container section'>
        <div className='intro-container-left'>
          <div className='intro-words-container'>
          <div className='intro-phrase'>Hello, I am</div>
          <div className='intro-name-title-container'>
            <div className='intro-name'>Kyle Hannemann</div>
            <div className='intro-title'>Full Stack Software Developer</div>
          </div>
          </div>
          <div className='intro-contacts'>
            <div><AiOutlineMail size={'100%'}/></div>
            <div><BsGithub size={'100%'}/></div>
            <div><BsLinkedin size={'100%'}/></div>
            <div className='resume-download'><BsDownload size={'100%'}/>
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
