
import './App.css';
import {BsGithub, BsInstagram, BsLinkedin, BsDownload, BsCheck2Circle} from 'react-icons/bs'
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
        <div className='section-container about-me'>
          <div className='about-me-professional'>
            <h2 className='about-me-pro-header'>Professional</h2>
            <div className='about-me-hook'>
                <p> 
                  I am a highly motivated software developer who loves to solve difficult problems. I am goal oriented and thrive off of overcoming challenges to achieve a desired result. I crave knowledge and feedback in order to continuously improve my skills.  
                </p>
            </div>
            <div className='about-me-points'>
              <h3>Why work with me?</h3>
              <div className='bullet-points'>
              {['Team Player', 'Self-Starter', 'Reliable', 'Resourceful', 'Versatile', 'Results Driven', 'Clear Communicator'].map((reason)=>{
                  return(
                    <div className='bullet-point'>
                      <div style={{color:'green'}}><BsCheck2Circle/></div>
                      <div>{reason}</div>
                    </div>
                  )
                })}
              </div>
                
            </div>
            <div className='about-me-experience'>
              <h3>Experience</h3>
                <div className='experience-point'>
                  <h4>Nature's Sunshine</h4>
                  <div>DevOps Engineer</div>
                  <div>August 2021 - Present</div>
                </div>
                <div className='experience-point'>
                  <h4>Devmountain</h4>
                  <div>Full Stack Web Development Program</div>
                  <div>March 2021 - July, 2021</div>
                </div>
            </div>
          </div>
          
          <div className='about-me-personal'>
            <h2 className='personal-header'>Personal</h2>
            <div className='slideshow-container'>
            </div>
            <p className='personal-p'>I am a husband and father. My wife, Natasha, and I have 2 children, R.J. and Naomi. My family is my top priority and I love spending time with them. I enjoy playing all kinds of games and spending time outside.</p>
          </div>
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
