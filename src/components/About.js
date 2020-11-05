import React, { Component } from 'react';
import './About.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import about from '../media/about.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="header-container">
                    <h1>Preparing your platform for innovation</h1>
                </div>
                <div className="intro-container">
                    <img src={about} alt="About us" className="img"></img>
                    <div className="intro">
                        <div className="opening-para">
                            <h3>At Gov Tax Incentive Consultants, we provide expert advice to pioneering UK businesses, helping them 
                                to compliantly capitalise on available government grants and incentives. </h3>
                        </div>
                        <p>Our exhaustive yet efficient approach means our clients never miss an available opportunity, while guaranteeing 
                           maximum value claims and minimal disruption to business practices.</p>
                        <p>We pride ourselves on our attentive, accessible service and tailor our delivery processes to your needs, 
                           ultimately ensuring a fully transparent experience and swift claim into which your input needn’t span beyond 
                           the bare essentials.</p>
                        <p>Our expertise rewards businesses for the ground-breaking work that they undertake by delivering substantial 
                           returns that can be reinvested in a manner that they see fit. In helping to expedite innovation and growth 
                           amongst businesses UK-wide, we ensure that the various grants and incentives that we assist with have the 
                           effect that government intended.</p>
                    </div>
                </div>
                <div className="subhead-container-browser">
                    <div className="title-overlay">
                        <div className="subhead-title">
                            <h1>Partnering with GTIC</h1>
                        </div>
                    </div>
                </div>
                <div className="about-container">
                    <div className="subhead-container-mobile">
                        <h1>Partnering with GTIC</h1>
                    </div>
                    <img src={about} alt="About us" className="about-img"></img>
                    <div className="about-text">
                        <p>We partner with emerging and established companies of all sizes that aspire to add something new to their industry. 
                           Specialising in the IT, engineering and manufacturing sectors, our team of experts has helped more than 250 
                           businesses secure various forms of valuable relief, providing a gateway to growth and further development.</p>
                        <p>Our combined experience covers a wealth of grants and incentives, including R&D Tax Relief and Patent Box, making 
                           us better placed than most to help businesses identify and make the most of relevant opportunities. With former 
                           KPMG consultants within our ranks, we deliver a ‘Big Four’ approach for an affordable price, making quality 
                           consultancy more widely accessible.</p>
                        <p>Both our efficiencies and our competitive prices are aided by the fact that we place technology at the core of our 
                           processes. We circumvent the labour associated with manual processes and the expense incurred through outsourcing 
                           that many consultancies are bound by, before passing these savings onto you via our modest fees.</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;