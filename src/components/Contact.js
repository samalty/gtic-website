import React, { Component } from 'react';
import './Contact.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import MapComponent from './Map';

class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="header-container">
                    <h1>Get in touch</h1>
                </div>
                <div className="intro-container">
                    <h3>Interested to find out whether the work you undertake qualifies for a government incentive? Request a free consultation 
                        via the contact form. We can assess your eligibility, share expert insight, and potentially begin preparing your 
                        platform for future growth.</h3>
                    <p>Alternatively, call 020 3959 8332 to speak to one of our expert advisors.</p>
                </div>
                <div className="map-container">
                    <MapComponent />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;