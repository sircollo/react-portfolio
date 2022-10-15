import React from 'react'
import '../styles/Navbar.css'
import{ Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      id="navbar"
    >
      <div className="container-fluid">
        <a class="navbar-brand" routerLink="">
          C.S
        </a>
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
              <a className="nav-link active"><Link to="/" className='nav-link'>Home</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
              <Link to="/about" className='nav-link'>About</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active"><Link to="/projects" className='nav-link'>Projects</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active"><Link to="/contact" className='nav-link'>Contact Me</Link></a>
            </li>
          </ul>
          <ul className="nav-social">
            <li className="nav-item">
              <a className="nav-link active text-dark"><GitHubIcon/></a>
            </li>
            <li>
              <a className="pt-1 mb-4">
                <a className="register-button"><LinkedInIcon/></a>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar