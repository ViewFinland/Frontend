import React, {Component} from 'react';
import './MapView.css';
import InteractiveMap from '../InteractiveMap/InteractiveMap';


class MapView extends Component
{
    state = {
        markers: [
            {
                id: 0,
                title: "Meep 1",
                label: "Ugh",
                lat: 60.314213,
                lng: 24.484465,
                url: "http://localhost:8080/api/img/30"
            },
            {
                id: 1,
                title: "Meep 2",
                label: "Ugh 2",
                lat: 60.312223,
                lng: 24.482475,
                url: "http://localhost:8080/api/img/0"
            },
            {
                id: 3,
                title: "Meep 3",
                label: "Ugh 3",
                lat: 60.303233,
                lng: 24.490475,
                url: "http://localhost:8080/api/img/10"
            }
        ],
        route: {
            origin: {lat: 60.314213, lng: 24.484465},
            destination: {lat: 60.314600, lng: 24.484470},
            path: [
                {lat: 60.314213, lng: 24.484465},
                {lat: 60.314253, lng: 24.484465},
                {lat: 60.314303, lng: 24.484465},
                {lat: 60.314353, lng: 24.484465},
                {lat: 60.314403, lng: 24.484465},
                {lat: 60.314453, lng: 24.484465},
                {lat: 60.314503, lng: 24.484465},
                {lat: 60.414553, lng: 24.684465},
            ]
        }
    }

    render()
    {
        return (
            <div className="interactive-map">
                <h2>Interactive Map</h2>
                <InteractiveMap 
                    markers={this.state.markers}
                    route={this.state.route}
                />
            </div>
        )
    }
}

export default MapView;