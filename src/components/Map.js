import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapComponent extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '450px',
            border: '1px solid red'
        };
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 51.370010, lng: -0.096010 }}
            >
                <Marker position={{ lat: 51.370010, lng: -0.096010 }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBhLmnds3EDDoTsUKMRBpd5exN9lkqA74E'
})(MapComponent);