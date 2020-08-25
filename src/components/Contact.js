import React, { Component } from 'react';
import './Contact.css';
import MapComponent from './Map';

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Get In Touch</h1>
                <div className="map-container">
                    <MapComponent />
                </div>
            </div>
        )
    }
}

export default Contact;