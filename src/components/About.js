import React from 'react'
import '../styles/About.css'
import AboutImage from '../assets/image1.jpg'
import JavascriptIcon from '@mui/icons-material/Javascript';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PublicIcon from '@mui/icons-material/Public';
function About() {
  return (
    <div className='about'>
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
        <button className='mt-3'>Contact Me</button>
        </div>        
      </div>
      <div className='about-image' style={{backgroundImage:`url(${AboutImage})`}}>
      </div>
    </div>
  )
}

export default About