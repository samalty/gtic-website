import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Home.scss';
import HomeNavbar from './HomeNavbar';
import CaseStudies from './CaseStudies';
import Footer from './Footer';
import logo from '../media/logo.png';
import home from '../media/home.jpg';
import about from '../media/about.jpg';
import opportunities from '../media/opportunities.jpg';
import claims from '../media/claims.jpg';

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
                    <img src={logo} alt="GITC" className="logo-header"></img>
                    <h1 className="tagline">Attentive, accessible, affordable tax incentive consultancy.</h1>
                    <h3 className="intro-text">We provide pioneering UK companies with optimised, tailored guidance, helping them 
                        to supplement growth and innovation by leveraging government support for their work.</h3>
                    <br></br>
                    <button className="btn">BOOK A FREE CONSULTATION</button>
                </div>
                <div className="intro-background">
                    <div className="link-container" data-aos="fade-up">
                        <div className="text-box grey top-left">
                            <h2>Preparing your platform for innovation</h2>
                            <hr></hr>
                            <h3>At Gov Tax Incentive Consultants, we provide expert advice to pioneering UK businesses, 
                                helping them to compliantly capitalise on available government grants and incentives.</h3>
                            <Link to="/about" className="intro-link">
                                <button className="intro-btn"><span>About us </span></button>
                            </Link>
                        </div>
                        <div className="decoration white"></div>
                        <div className="image-container bottom-right">
                            <img src={about} alt="About us" className="intro-img"></img>
                        </div>
                        <Link to="/about" className="intro-link-mobile">
                            <button className="intro-btn-mobile"><span>About us </span></button>
                        </Link>
                    </div>
                </div>
                <div className="intro-background reverse">
                    <div className="link-container" data-aos="fade-up">
                        <div className="text-box white top-right">
                            <h2>Never miss an opportunity with GTIC</h2>
                            <hr></hr>
                            <h3>Our goal is to reward companies of all sectors, sizes and structures for the pioneering 
                                work that they undertake. Achieving this requires specialist knowledge of a broad range 
                                of incentives that few other consultancies possess.</h3>
                            <Link to="/opportunities" className="intro-link">
                                <button className="intro-btn float-right white"><span>Opportunities </span></button>
                            </Link>
                        </div>
                        <div className="decoration grey"></div>
                        <div className="image-container bottom-left">
                            <img src={opportunities} alt="Opportunities" className="intro-img"></img>
                        </div>
                        <Link to="/opportunities" className="intro-link-mobile">
                            <button className="intro-btn-mobile"><span>Opportunities </span></button>
                        </Link>
                    </div>
                </div>
                <div className="intro-background">
                    <div className="link-container" data-aos="fade-up">
                        <div className="text-box grey top-left">
                            <h2>Making a claim with GTIC</h2>
                            <hr></hr>
                            <h3>We promise maximum value and total transparency. Our rigorous claims process blueprint 
                                is designed to identify and capitalise on all available opportunities, while keeping 
                                you in the loop every step of the way.</h3>
                            <Link to="/making_a_claim" className="intro-link">
                                <button className="intro-btn"><span>Making a claim </span></button>
                            </Link>
                        </div>
                        <div className="decoration white"></div>
                        <div className="image-container bottom-right">
                            <img src={claims} alt="Making a claim" className="intro-img"></img>
                        </div>
                        <Link to="/making_a_claim" className="intro-link-mobile">
                            <button className="intro-btn-mobile"><span>Making a claim </span></button>
                        </Link>
                    </div>
                </div>
                <div className="intro-background reverse">
                    <div className="link-container" data-aos="fade-up">
                        <div className="text-box white top-right">
                            <h2>R&D Tax Relief explained</h2>
                            <hr></hr>
                            <h3>A generous initiative rewarding innovation within UK industry, Research & Development 
                                (R&D) Tax Relief could provide your business with a competitive advantage and firm 
                                foundations for future growth.</h3>
                            <Link to="/" className="intro-link">
                                <button className="intro-btn float-right white"><span>How it works </span></button>
                            </Link>
                        </div>
                        <div className="decoration grey"></div>
                        <div className="image-container bottom-left">
                            <img src={opportunities} alt="Opportunities" className="intro-img"></img>
                        </div>
                        <Link to="/" className="intro-link-mobile">
                            <button className="intro-btn-mobile"><span>How it works </span></button>
                        </Link>
                    </div>
                </div>
                <div className="intro-background">
                    <div className="link-container" data-aos="fade-up">
                        <div className="text-box grey top-left">
                            <h2>Insights</h2>
                            <hr></hr>
                            <h3>Insights is where we share much of our expertise directly with you. If you have a 
                                query relating to a particular tax incentive or grant, here is where we will  
                                hopefully have you covered.</h3>
                            <Link to="/" className="intro-link">
                                <button className="intro-btn"><span>Insights </span></button>
                            </Link>
                        </div>
                        <div className="decoration white"></div>
                        <div className="image-container bottom-right">
                            <img src={claims} alt="Making a claim" className="intro-img"></img>
                        </div>
                        <Link to="/" className="intro-link-mobile">
                            <button className="intro-btn-mobile"><span>Insights </span></button>
                        </Link>
                    </div>
                </div>
                <div className="case-studies">
                    <div className="link-container" data-aos="fade-up">
                        <CaseStudies />
                    </div>
                </div>
                <div className="testimonials">
                    <div className="overlay">
                        <div className="testimonials-container">
                            <div className="testimonials-text">
                                <h1>What our clients say about us</h1>
                                <hr></hr>
                                <div data-aos="fade-up">
                                    <h2>"GTIC has been professional throughout. They learnt about our business, 
                                        met us many times and have cleverly put in place plans for the future."</h2>
                                    <h4>Engineering Consultancy, East Midlands</h4>
                                </div>
                                <div data-aos="fade-up">
                                    <h2>"The team cares about our business and has helped us reclaim significant 
                                        sums from R&D. They also worked quickly when we needed it and turned around 
                                        our claim in under two weeks."</h2>
                                    <h4>Software Development House, London</h4>
                                </div>
                                <div data-aos="fade-up">
                                    <h2>"GTIC managed our R&D tax credit from start to finish, they were better at 
                                        finding eligible projects than our previous providers."</h2>
                                    <h4>Packaging Manufacturer, Kent</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;