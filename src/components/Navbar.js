import React from 'react'
import '../styles/Navbar.css'
import{ Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-light">
      <><Link to="/" className="navbar-brand">C.S</Link></>
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
      <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <>
            <Link to="/" className="nav-item nav-link">Home</Link>            
          </>
          <>
          <Link to="/about" className='nav-link'>About</Link>
          </>
          <>
          <Link to="/projects" className="nav-item nav-link">Projects</Link>
          </>
          <>
          <Link to="/contact" className="nav-item nav-link">Contact Me</Link>
          </>
        </div>
        <div className='navbar-nav social-links'>
            <ul>
              <li>Git</li>
              <li>Faceboook</li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar