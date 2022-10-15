import React from 'react'
import '../styles/Landing.css'
import About from './About'
import Contact from './Contact'
import Project from './Projects'
import ContactImage from '../assets/contact1.png'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
    <div className='container-fluid landing'>
      <div className='intro-text'>
        <h1>Hi, I am &nbsp;<span> Collins Sirwani</span></h1>
        <p>Full Stack Software Developer with skills in JavaScript, Python and TypeScript Programming languages. Also skilled in Django, Angular and React Frameworks</p>
        <div className='buttons'>
        <button><Link to="/projects" className='myprojects'>Projects</Link></button>
        <button className='conta'><Link to="/contact" className='contactme'>Contact Me</Link></button>
        </div>
      </div>
      <div className='hero-image' style={{backgroundImage:`url(${ContactImage})`}}>

      </div> 
    </div>
    <About/>
    <Project/>
    <Contact/>
    </>
  )
}

export default Landing