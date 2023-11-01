import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Layout.css';
import CV from './Saurav Kumar.pdf';

function Layout({ contentComponent }) {
    return (
        <div className="main-container">
            <div className="aside">
                <div className="logo">
                    <a href="/">sa<span>ur</span>av</a>
                </div>
                <div className="nav-toggler">
                    <span></span>
                </div>
                <ul className="nav">
                    <li><NavLink exact to="/" activeClassName="active"><i className="fa fa-home"></i>Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active"><i className="fa fa-user"></i>About</NavLink></li>
                    <li><NavLink to="/services" activeClassName="active"><i className="fa fa-list"></i>Services</NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName="active"><i className="fa fa-briefcase"></i>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active"><i className="fa-solid fa-envelope"></i>Contact</NavLink></li>
                    <li>
                        <a href={CV} download="Saurav Kumar.pdf">
                            <i className="fa-solid fa-download"></i> Download CV
                        </a>
                    </li>
                </ul>
            </div>

            <div className="main-content">
                {contentComponent}
            </div>
        </div>
    );
}

export default Layout;
