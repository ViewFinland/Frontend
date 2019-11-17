import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './InteractiveMap.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import { resolve } from 'dns';

const api_key = process.env.REACT_APP_API_KEY || "Get your shit together";

const mapStyles = {
    margin: '5%',
    height: '60%'
};

class InteractiveMap extends Component
{
    state = {
        directions: null
    }
    
    componentDidMount()
    {
        
    }

    render()
    {
        if (!this.props.loaded)
        {
            return <div>Loading...</div>
        }

        let options = {
            strokeColor: "#ff2527"
        };


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
                    <Polyline
                        path={this.props.route.path}
                        options={options}
                        // onClick={
                        //     function(event, self, meep)
                        //     {
                        //         console.log("---------------Pressed E:", event);
                        //         console.log("---------------Pressed S:", self);
                        //         console.log("---------------Pressed M:", meep);

                        //         this.props.options = {
                        //             strokeColor: "#FFF000"
                        //         };
                        //     }
                        // }
                        // geodesic={true}
                        // options={{
                        //     strokeColor: "#ff2527",
                        //     strokeOpacity: 0.75,
                        //     strokeWeight: 2
                        //     // icons: [
                        //     //     {
                        //     //         // icon: lineSymbol,
                        //     //         offset: "0",
                        //     //         repeat: "20px"
                        //     //     }
                        //     // ]
                        // }}
                    />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: api_key
})(InteractiveMap);

