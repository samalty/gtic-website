import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import HomeNavbar from './HomeNavbar';
import home from '../media/home.jpg';
import about from '../media/about.jpg';
import opportunities from '../media/opportunities.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Aos.init({
            duration: 1000
        });
    }
    render() {
        return (
            <div>
                <HomeNavbar />
                <img src={home} alt="Banner" className="banner-img"></img>
                <div className="banner-text">
                    <h1>Gov Tax Incentive Consultants</h1>
                    <h2>Attentive, accessible, affordable tax incentive consultancy.</h2>
                    <h3>We provide pioneering UK companies with optimised, tailored guidance, helping them 
                        to supplement growth and innovation by leveraging government support for their work.</h3>
                    <br></br>
                    <button className="btn">BOOK A FREE CONSULTATION</button>
                </div>
                <div className="intro-background">
                    <div className="container">
                        <div className="text-box grey top-left" data-aos="fade-up">
                            <h2>Preparing your platform for innovation</h2>
                            <hr></hr>
                            <h3>At Gov Tax Incentive Consultants, we provide expert advice to pioneering UK businesses, 
                                helping them to compliantly capitalise on available government grants and incentives.</h3>
                            <Link to="/about" className="intro-link">
                                <button className="intro-btn"><span>About Us </span></button>
                            </Link>
                        </div>
                        <div className="decoration white"></div>
                        <div className="image-container bottom-right" data-aos="fade-left">
                            <img src={about} alt="About us" className="intro-img"></img>
                        </div>
                    </div>
                </div>
                <div className="intro-background grey">
                    <div className="container">
                        <div className="text-box white top-right" data-aos="fade-up">
                            <h2>Never miss an opportunity with GTIC</h2>
                            <hr></hr>
                            <h3>Our goal is to reward companies of all sectors, sizes and structures for the pioneering 
                                work that they undertake. Achieving this requires specialist knowledge of a broad range 
                                of incentives that few other consultancies possess.</h3>
                            <button className="intro-btn float-right white">Opportunities </button>
                        </div>
                        <div className="decoration grey"></div>
                        <div className="image-container bottom-left" data-aos="fade-right">
                            <img src={opportunities} alt="Opportunities" className="intro-img"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;