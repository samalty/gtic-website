import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <li className="nav-links">
                            <Link to="/" className="navbar-link"><b>HOME</b></Link>
                        </li>
                        <li className="nav-links">
                            <Link to="/about" className="navbar-link"><b>ABOUT US</b></Link>
                        </li>
                        <li className="nav-links">
                            <b>OPPORTUNITIES</b>
                        </li>
                        <li className="nav-links">
                            <Link to="/making_a_claim" className="navbar-link"><b>MAKING A CLAIM</b></Link>
                        </li>
                        <li className="nav-links">
                            <b>R&D EXPLAINED</b>
                        </li>
                        <li className="nav-links">
                            <b>CASE STUDIES</b>
                        </li>
                        <li className="nav-links">
                            <b>INSIGHTS</b>
                        </li>
                        <li className="nav-links">
                            <Link to="/contact" className="navbar-link"><b>CONTACT</b></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;