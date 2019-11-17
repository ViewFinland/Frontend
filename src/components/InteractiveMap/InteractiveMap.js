import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './InteractiveMap.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import { resolve } from 'dns';

const api_key = process.env.REACT_APP_API_KEY || "Put your API Key to an environment variable.";

const mapStyles = {
    margin: '5%',
    height: '60%'
};

class InteractiveMap extends Component
{
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    onMarkerClick = (props, marker, event) => 
    {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onClose = props =>
    {
        if (this.state.showingInfoWindow)
        {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
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
                                    width: 50,
                                    height: 50
                                }
                            }}
                            label={marker.label}
                            draggable={marker.draggable}
                        />
                    ))}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
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

