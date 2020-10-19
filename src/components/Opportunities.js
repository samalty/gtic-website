import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Opportunities.scss';
import Navbar from './Navbar';
import Accordion from './Accordion';
import Footer from './Footer';
import opportunities from '../media/opportunities.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { OpportunitiesData } from './OpportunitiesData';

class Opportunities extends Component {
    componentDidMount() {
        Aos.init({
            duration: 1000
        });
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="header-container">
                    <h1>Never miss an opportunity with GTIC</h1>
                </div>
                <div className="intro-container">
                    <img src={opportunities} alt="Making a claim" className="img"></img>
                    <div className="intro">
                        <div className="opening-para">
                                <h3>Our goal is to reward companies of all sectors, sizes and structures for the pioneering work that they 
                                    undertake. Achieving this requires specialist knowledge of a broad range of incentives that few other 
                                    consultancies possess.</h3>
                                <h3>From IT to engineering, manufacturing to property, our rare combination of expertise has helped businesses 
                                    across various industries identify and maximise relevant opportunities.</h3>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="incentives-browser">
                    {OpportunitiesData.map((item, index) => {
                        return (
                            <div key={index}>
                                <h2>{item.title}</h2>
                                <i className={item.icon}></i>
                                <br></br>
                                <br></br>
                                <hr></hr>
                                <p>{item.description1}</p>
                                <p>{item.description2}</p>
                                <Link to={item.path}>
                                    <button className="find-out">Find out more</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className="incentives-mobile">
                    <Accordion />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Opportunities;