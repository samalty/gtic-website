import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Home.scss';
import Navbar from './Navbar';
import CaseStudies from './CaseStudies';
import { HomeData } from './HomeData';
import Footer from './Footer';
import logo from '../media/logo.png';

class Home extends Component {
    componentDidMount() {
        Aos.init({
            duration: 1000
        });
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="banner-header">
                    <div className="header-overlay">
                        <div className="banner-text">
                            <img src={logo} alt="GITC" className="logo-header"></img>
                            <h1 className="tagline">Attentive, accessible, affordable tax incentive consultancy.</h1>
                            <h3 className="intro-text">We provide pioneering UK companies with optimised, tailored guidance, helping them 
                                to supplement growth and innovation by leveraging government support for their work.</h3>
                            <br></br>
                            <button className="btn">BOOK A FREE CONSULTATION</button>
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    {HomeData.map((item, index) => {
                        return (
                            <div className="intro-background" key={index}>
                                <div className="link-container" data-aos="fade-up">
                                    <div className="text-box">
                                        <h2>{item.title}</h2>
                                        <div className="desc-container">
                                            <hr></hr>
                                            <h3>{item.description}</h3>
                                        </div>
                                        <Link to={item.path} className="intro-link">
                                            <button className="intro-btn"><span>{item.buttonText}</span></button>
                                        </Link>
                                    </div>
                                    <div className="decoration"></div>
                                    <div className="image-container bottom-right">
                                        <img src={item.img} alt={item.buttonText} className="intro-img"></img>
                                        <div className="intro-img-background" style={{backgroundImage: `url(${item.img})`}}>
                                            <div className="intro-img-overlay" data-aos="zoom-out">
                                                <h2>{item.title}</h2>
                                                <hr></hr>
                                                <h3>{item.description}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={item.path} className="intro-link-mobile">
                                        <button className="intro-btn-mobile"><span>{item.buttonText}</span></button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="case-studies">
                    <CaseStudies />
                </div>
                <div className="testimonials">
                    <div className="overlay">
                        <div className="testimonials-container">
                            <div className="testimonials-text">
                                <h1>What our clients say about us</h1>
                                <hr></hr>
                                <div data-aos="fade-up">
                                    <h2><i><i className="fas fa-quote-left"></i> GTIC have been professional throughout. They learnt about our business, 
                                        met us many times and have cleverly put in place plans for the future. <i className="fas fa-quote-right"></i></i></h2>
                                    <h4>Engineering Consultancy, East Midlands</h4>
                                </div>
                                <div data-aos="fade-up">
                                    <h2><i><i className="fas fa-quote-left"></i> The team cares about our business and has helped us reclaim significant 
                                        sums from R&D. They also worked quickly when we needed it and turned around our claim in under two weeks.  <i className="fas fa-quote-right"></i></i></h2>
                                    <h4>Software Development House, London</h4>
                                </div>
                                <div data-aos="fade-up">
                                    <h2><i><i className="fas fa-quote-left"></i> GTIC managed our R&D tax credit from start to finish, they were better at 
                                        finding eligible projects than our previous providers.  <i className="fas fa-quote-right"></i></i></h2>
                                    <h4>Packaging Manufacturer, Kent</h4>
                                </div>
                            </div>
                            <button className="consultation">BOOK A FREE CONSULTATION</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;