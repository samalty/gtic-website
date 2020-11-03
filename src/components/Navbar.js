import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../media/logo-small.png';
import { NavbarData } from './NavbarData';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    window.addEventListener('scroll', () => {
        const element = document.getElementById("nav");
        if (window.scrollY > 100) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    });
    return (
        <div>
            <div className="navbar" id="nav">
                <Link to="/">
                    <img src={logo} alt="GTIC" className="navbar-logo"></img>
                </Link>
                <Link to="#" className="menu-bars">
                    <i className="fas fa-bars" onClick={showSidebar}></i>
                </Link>
                <ul>
                    {NavbarData.filter(NavbarData => NavbarData.title !== 'HOME').map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path} className="navbar-link">{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <i className="fas fa-times"></i>
                        </Link>
                    </li>
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        )
                    })}
                 </ul>
            </nav>
        </div>
    )
}

export default Navbar;