import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.scss';
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
    //}className={this.state.scrolled ? 'navbar' : 'navbar unscrolled'}
    render() {
        return (
            <div>
                <Navbar className={this.state.scrolled ? 'navbar' : 'navbar unscrolled'} />
            </div>
        )
    }
}

export default HomeNavbar;