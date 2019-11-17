import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './InteractiveMap.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const api_key = process.env.REACT_APP_API_KEY || "Get your shit together";

const mapStyles = {
    margin: '5%',
    height: '60%'
};

class InteractiveMap extends Component
{
    componentDidMount()
    {
        console.log("Api Key:", api_key);
    }

    render()
    {
        if (!this.props.loaded)
        {
            return <div>Loading...</div>
        }
        return (
            <div ref="map">
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        /* Nuuksio National Park */
                        lat: 60.313203,
                        lng: 24.480455
                    }}
                >
                    {this.props.markers.map(marker => (
                        <Marker
                            position={{ lat: marker.lat, lng: marker.lng }}
                            key={marker.id}
                            title={marker.title}
                            icon={{
                                url: marker.url,
                                scaledSize: {
                                    width: 100,
                                    height: 100
                                }
                            }}
                            label={marker.label}
                            draggable={marker.draggable}
                        />
                    ))}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: api_key
})(InteractiveMap);

