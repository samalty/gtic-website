import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeNavbar.css';

class HomeNavbar extends Component {
    constructor(){
        super()
        this.state = {
            scrolled: false,
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true) {
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false });
            }
        })
    }
    //componentWillUnmount(){
    //    window.removeEventListener('scroll');
    //}
    render() {
        return (
            <div>
                <nav className={this.state.scrolled ? 'home-navbar scrolled' : 'home-navbar'}>
                    <ul>
                        <li className="nav-links">
                            <Link to="/" className={this.state.scrolled ? 'scrolledText' : 'unscrolledText'}><b>HOME</b></Link>
                        </li>
                        <li className="nav-links">
                            <Link to="/about" className={this.state.scrolled ? 'scrolledText' : 'unscrolledText'}><b>ABOUT US</b></Link>
                        </li>
                        <li className="nav-links">
                            <b>OPPORTUNITIES</b>
                        </li>
                        <li className="nav-links">
                            <Link to="/making_a_claim" className={this.state.scrolled ? 'scrolledText' : 'unscrolledText'}><b>MAKING A CLAIM</b></Link>
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
                            <Link to="/contact" className={this.state.scrolled ? 'scrolledText' : 'unscrolledText'}><b>CONTACT</b></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default HomeNavbar;