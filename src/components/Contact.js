import React, { Component } from 'react';
import './Contact.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import MapComponent from './Map';

class Contact extends Component {
    render() {
        return (
            <div className="background">
                <Navbar />
                <div className="header-container">
                    <h1>Get in touch</h1>
                </div>
                <div className="intro-container">
                    <div className="intro">
                        <h3>Interested to find out whether the work you undertake qualifies for a government incentive?</h3>
                        <p>Request a free consultation via the contact form. We can assess your eligibility, share expert insight, and 
                           potentially begin preparing your platform for future growth.</p>
                        <p>Alternatively, call 020 3959 8332 to speak to one of our expert advisors.</p>
                    </div>
                    <div className="form-container">
                        <form>
                            <input type="text" name="name" placeholder="Name" className="name"></input>
                            <input type="text" name="number" placeholder="Phone No." className="number"></input><br></br>
                            <input type="text" name="email" placeholder="Email"></input><br></br>
                            <input type="text" name="company" placeholder="Company"></input><br></br>
                            <textarea type="text" name="message" placeholder="Message"></textarea><br></br>
                            <input type="submit" value="Send"></input><br></br>
                        </form>
                    </div>
                </div>
                <MapComponent />
                <div className="contact-details">
                    <p>hello@govtaxincentives.com</p>
                    <p>Suite 2.10, easyHub Croydon, 22 Addiscombe Road, Croydon, CR0 5PE</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;