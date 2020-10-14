import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeNavbar.scss';
import logo from '../media/logo-small.png';

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
                    <Link to="/">
                        <img src={logo} alt="GTIC" className="navbar-logo"></img>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/about" className={this.state.scrolled ? 'scrolledText' : 'unscrolledText'}>ABOUT US</Link>
                        </li>
                        <li>
                            OPPORTUNITIES
                        </li>
                        <li>
                            <Link to="/making_a_claim" className={this.state.scrolled ? 'scrolledText' : 'unscrolledText'}>MAKING A CLAIM</Link>
                        </li>
                        <li>
                            R&D EXPLAINED
                        </li>
                        <li>
                            INSIGHTS
                        </li>
                        <li>
                            <Link to="/contact" className={this.state.scrolled ? 'scrolledText' : 'unscrolledText'}>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default HomeNavbar;