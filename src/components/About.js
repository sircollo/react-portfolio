import React from 'react'
import '../styles/About.css'
import AboutImage from '../assets/image1.jpg'
import JavascriptIcon from '@mui/icons-material/Javascript';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PublicIcon from '@mui/icons-material/Public';
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
function About() {
  return (
    <div className='about' id='about'>
      <div className='about-text'>
        <h1>&mdash;About Me&mdash;</h1>
        <p className='pt-5'>Full Stack Software Developer with over 1+ years Experience in web development using latest programming technologies such as Python and JavaScript</p>
        <div className='language-icons'>
          <ul>
            <li><JavascriptIcon/> JavaScript</li>
            <li><AcUnitIcon/> React</li>
            <li><PublicIcon/> Angular</li>
          </ul>
        </div>
        <div className='contact-me'>
        <button className='mt-3'><Link to="contact"spy={true} smooth={true} offset={-100} duration={500} className='contact-link'>Contact Me</Link></button>
        </div>        
      </div>
      <div className='about-image' style={{backgroundImage:`url(${AboutImage})`}}>
      </div>
    </div>
  )
}

export default About