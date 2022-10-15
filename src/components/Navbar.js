import React from 'react'
import '../styles/Navbar.css'
// import{ Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      id="navbar"
    >
      <div className="container-fluid">
        <Link to="home"spy={true} smooth={true} offset={-100} duration={500} className="navbar-brand">
        C.S
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active"><Link to="home"spy={true} smooth={true} offset={-100} duration={500} className='nav-link'>Home</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
              <Link to="about" spy={true} smooth={true} offset={-100} duration={500}  className='nav-link active'>About</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active"><Link to="projects" spy={true} smooth={true} offset={-60} duration={500}  className='nav-link'>Projects</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active"><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className='nav-link'>Contact Me</Link></a>
            </li>
          </ul>
          <ul className="nav-social">
            <li className="nav-item">
              <a a target="_blank" href="https://github.com/sircollo" className="nav-link active text-dark"><GitHubIcon/></a>
            </li>
            <li>
              <a className="pt-1 mb-4">
                <a a target="_blank" href="https://www.linkedin.com/in/collins-sirwani-b693bb112/"><LinkedInIcon/></a>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar