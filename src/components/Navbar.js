import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../media/logo-small.png';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <Link to="/">
                        <img src={logo} alt="GTIC" className="navbar-logo"></img>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/about" className="navbar-link">ABOUT US</Link>
                        </li>
                        <li>
                            OPPORTUNITIES
                        </li>
                        <li>
                            <Link to="/making_a_claim" className="navbar-link">MAKING A CLAIM</Link>
                        </li>
                        <li>
                            R&D EXPLAINED
                        </li>
                        <li>
                            INSIGHTS
                        </li>
                        <li>
                            <Link to="/contact" className="navbar-link">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;