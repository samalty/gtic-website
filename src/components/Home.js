import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles/Home.scss';
import Navbar from './Navbar';
import Cursor from './Cursor';
import CaseStudies from './CaseStudies';
import Testimonials from './Testimonials';
import { HomeData } from './data/HomeData';
import Footer from './Footer';
import logo from './media/logo-long.png';

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
                <Cursor />
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
                                <div className="intro-container">
                                    <div className="link-container" data-aos="fade-up">
                                        <div className="text-box">
                                            <h2>{item.title}</h2>
                                            <hr></hr>
                                            <h3>{item.description}</h3>
                                            <Link to={item.path} className="intro-link">
                                                <button className="intro-btn"><span>{item.buttonText}</span></button>
                                            </Link>
                                        </div>
                                        <div className="decoration"></div>
                                        <div className="image-container bottom-right">
                                            <img src={item.img} alt={item.buttonText} className="intro-img"></img>
                                            <Link to={item.path} className="intro-link-mobile">
                                                <div className="intro-img-background" style={{backgroundImage: `url(${item.img})`}}>
                                                    <div className="intro-img-overlay" data-aos="zoom-out">
                                                        <h2>{item.title}</h2>
                                                        <hr></hr>
                                                        <h3>{item.description}</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <Link to={item.path} className="intro-link-mobile">
                                            <button className="intro-btn-mobile"><span>{item.buttonText}</span></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="clients">
                    <div className="clients-container">
                        <h2>Who we work with</h2>
                        <p>Client logos to go here</p>
                    </div>
                </div>
                <div className="testimonials">
                    <div className="overlay">
                        <div className="testimonials-container">
                            <div className="testimonials-text">
                                <h2>What our clients say about us</h2>
                                <Testimonials />
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