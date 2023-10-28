import React from 'react';
import { Link } from 'react-router-dom'; 
import './Layout.css';
import Home from '../Home/Home';


function Layout({ contentComponent }){
  return (
    <div className="main-container">
        <div className="aside">
            <div className="logo">
                <a href="#">sa<span>ur</span>av</a>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className="nav">
            <li><Link to="/" className="active"><i className="fa fa-home"></i>Home</Link></li>
            <li><Link to="/about"><i className="fa fa-user"></i>About</Link></li>
            <li><Link to="/services"><i className="fa fa-list"></i>Services</Link></li>
            <li><Link to="/portfolio"><i className="fa fa-briefcase"></i>Portfolio</Link></li>
            <li><Link to="/contact"><i className="fa-solid fa-envelope"></i>Contact</Link></li>
            </ul>

        </div>

        <div className="main-content">
            {contentComponent}
        </div>
    </div>
  )
}

export default Layout