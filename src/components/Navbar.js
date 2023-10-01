import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Saurav</div>
      </div>
      <div className="navbar-right">
        <Link to="home" className="menu-item" smooth={true} duration={500}>Home</Link>
        <Link to="about" className="menu-item" smooth={true} duration={500}>About</Link>
        <Link to="services" className="menu-item" smooth={true} duration={500}>Service</Link>
        <Link to="projects" className="menu-item" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" className="menu-item" smooth={true} duration={500}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
