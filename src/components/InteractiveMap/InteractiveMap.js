import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './InteractiveMap.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import { resolve } from 'dns';

const api_key = process.env.REACT_APP_API_KEY || "Get your shit together";

const mapStyles = {
    width: '90%',
    height: '80%'
};

class InteractiveMap extends Component
{
    constructor(props)
    {
        super(props);
        this.showingInfoWindow = false;
        this.activeMarker = {};
        this.selectedPlace = {};
    }

    onMarkerClick = (props, marker, event) => 
    {
        this.selectedPlace = props;
        this.activeMarker = marker;
        this.showingInfoWindow = true;
    }

    onClose = props =>
    {
        if (this.showingInfoWindow)
        {
            this.showingInfoWindow = false;
            this.activeMarker = null;
        }
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
                    {this.props.markers.map((marker, index) => (
                        <Marker
                            key={index}
                            onClick={this.onMarkerClick}
                            position={{ lat: marker.lat, lng: marker.lng }}
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
                    <InfoWindow
                        marker={this.activeMarker}
                        visible={true}
                        onClose={this.onClose}
                        >
                            <div>
                                <h4>Meep</h4>
                            </div>
                    </InfoWindow>
                    {this.props.routes.map((route, index) => (
                        <Polyline
                            key={index}
                            path={route.path}
                            geodesic={true}
                            options={{
                                strokeColor: route.colour,
                                strokeOpacity: 0.75,
                                strokeWeight: 3,
                                icons: [
                                    {
                                        offset: "0",
                                        repeat: "20px"
                                    }
                                ]
                            }}
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

