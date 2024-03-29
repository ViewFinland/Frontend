import React, {Component} from 'react';
import './MapView.css';
import InteractiveMap from '../InteractiveMap/InteractiveMap';


class MapView extends Component
{
    state = {
        markers: [
            {
                title: "Track 1 - 1",
                lat: 60.306711,
                lng: 24.502735,
                url: "http://localhost:8080/api/img/0"
            },
            {
                title: "Track 1 - 2",
                lat: 60.309166,
                lng: 24.499284,
                url: "http://localhost:8080/api/img/1"
            },
            {
                title: "Track 1 - 3",
                lat: 60.310749,
                lng: 24.496288,
                url: "http://localhost:8080/api/img/2"
            },
            {
                title: "Track 1 - 4",
                lat: 60.313150,
                lng: 24.492877,
                url: "http://localhost:8080/api/img/3"
            },
            {
                title: "Track 1 - 5",
                lat: 60.314993,
                lng: 24.496106,
                url: "http://localhost:8080/api/img/4"
            },
            {
                title: "Track 1 - 6",
                lat: 60.319589,
                lng: 24.496667,
                url: "http://localhost:8080/api/img/5"
            },
            {
                title: "Track 2 - 1",
                lat: 60.309687,
                lng: 24.501353,
                url: "http://localhost:8080/api/img/6"
            },
            {
                title: "Track 2 - 2",
                lat: 60.312605,
                lng: 24.502136,
                url: "http://localhost:8080/api/img/7"
            },
            {
                title: "Track 2 - 3",
                lat: 60.314878,
                lng: 24.500753,
                url: "http://localhost:8080/api/img/8"
            },
            {
                title: "Track 2 - 4",
                lat: 60.317741,
                lng: 24.501289,
                url: "http://localhost:8080/api/img/9"
            },
            {
                title: "Track 2 - 5",
                lat: 60.320280,
                lng: 24.499171,
                url: "http://localhost:8080/api/img/10"
            },
            {
                title: "Track 3 - 1",
                lat: 60.307965,
                lng: 24.495065,
                url: "http://localhost:8080/api/img/11"
            },
            {
                title: "Track 3 - 2",
                lat: 60.309612,
                lng: 24.494819,
                url: "http://localhost:8080/api/img/12"
            },
            {
                title: "Track 3 - 3",
                lat: 60.311667,
                lng: 24.491902,
                url: "http://localhost:8080/api/img/13"
            },
            {
                title: "Track 3 - 4",
                lat: 60.314537,
                lng: 24.492107,
                url: "http://localhost:8080/api/img/14"
            },
            {
                title: "Track 3 - 5",
                lat: 60.320775,
                lng: 24.493872,
                url: "http://localhost:8080/api/img/15"
            },
            {
                title: "Toilet",
                lat: 60.305414,
                lng: 24.505009,
                url: "http://localhost:8080/api/img/toilet"
            },
            {
                title: "Toilet",
                lat: 60.319112,
                lng: 24.494971,
                url: "http://localhost:8080/api/img/toilet"
            },
            {
                title: "Toilet",
                lat: 60.318883,
                lng: 24.499992,
                url: "http://localhost:8080/api/img/toilet"
            },
            {
                title: "Toilet",
                lat: 60.315748,
                lng: 24.496001,
                url: "http://localhost:8080/api/img/toilet"
            },
            {
                title: "Waste Bin",
                lat: 60.305444,
                lng: 24.505009,
                url: "http://localhost:8080/api/img/bin"
            },
            {
                title: "Waste Bin",
                lat:  60.311837,
                lng: 24.502862,
                url: "http://localhost:8080/api/img/bin"
            },
            {
                title: "Waste Bin",
                lat: 60.319916,
                lng: 24.496874,
                url: "http://localhost:8080/api/img/bin"
            },
            {
                title: "Fire Pit",
                lat: 60.305414,
                lng: 24.505089,
                url: "http://localhost:8080/api/img/bonfire"
            },
            {
                title: "Fire Pit",
                lat: 60.309097,
                lng: 24.498615,
                url: "http://localhost:8080/api/img/bonfire"
            },
            {
                title: "Fire Pit",
                lat: 60.311940,
                lng: 24.497167,
                url: "http://localhost:8080/api/img/bonfire"
            },
            {
                title: "Camping",
                lat: 60.305474,
                lng: 24.505059,
                url: "http://localhost:8080/api/img/camping"
            },
            {
                title: "Camping",
                lat: 60.308119,
                lng: 24.502069,
                url: "http://localhost:8080/api/img/camping"
            },
            {
                title: "Camping",
                lat: 60.310144,
                lng: 24.499516,
                url: "http://localhost:8080/api/img/camping"
            },
            {
                title: "Fishing",
                lat: 60.306590,
                lng: 24.503274,
                url: "http://localhost:8080/api/img/fishing"
            },
            {
                title: "Fishing",
                lat: 60.310406,
                lng: 24.495282,
                url: "http://localhost:8080/api/img/fishing"
            },
            {
                title: "Fishing",
                lat: 60.311298,
                lng: 24.503363,
                url: "http://localhost:8080/api/img/fishing"
            },
        ],
        routes: [
            {
                colour: "#058c0e",
                path: [
                    {lat: 60.305414, lng: 24.505009}, // Origin
                    {lat: 60.305813, lng: 24.503711},
                    {lat: 60.306711, lng: 24.502735},
                    {lat: 60.307572, lng: 24.502327},
                    {lat: 60.307721, lng: 24.501404},
                    {lat: 60.307949, lng: 24.500835},
                    {lat: 60.308746, lng: 24.499885},
                    {lat: 60.309166, lng: 24.499284},
                    {lat: 60.309968, lng: 24.498533},
                    {lat: 60.310212, lng: 24.496782},
                    {lat: 60.310749, lng: 24.496288},
                    {lat: 60.310972, lng: 24.495398},
                    {lat: 60.311572, lng: 24.495076},
                    {lat: 60.311917, lng: 24.494400},
                    {lat: 60.313150, lng: 24.492877},
                    {lat: 60.314053, lng: 24.493939},
                    {lat: 60.314223, lng: 24.495119},
                    {lat: 60.314993, lng: 24.496106},
                    {lat: 60.315683, lng: 24.496130},
                    {lat: 60.316677, lng: 24.494800},
                    {lat: 60.318181, lng: 24.495809},
                    {lat: 60.318803, lng: 24.497118},
                    {lat: 60.319589, lng: 24.496667},
                    {lat: 60.319987, lng: 24.495712},
                    {lat: 60.320534, lng: 24.495240}
                ]
            },
            {
                colour: "#deea02",
                path: [
                    {lat: 60.309687, lng: 24.501353}, // Origin
                    {lat: 60.310681, lng: 24.500312},
                    {lat: 60.311505, lng: 24.500967},
                    {lat: 60.312605, lng: 24.502136},
                    {lat: 60.312918, lng: 24.500752},
                    {lat: 60.314108, lng: 24.501010},
                    {lat: 60.314878, lng: 24.500753},
                    {lat: 60.315829, lng: 24.499476},
                    {lat: 60.316663, lng: 24.501482},
                    {lat: 60.317741, lng: 24.501289},
                    {lat: 60.318320, lng: 24.500302},
                    {lat: 60.319101, lng: 24.498768},
                    {lat: 60.320280, lng: 24.499171},
                    {lat: 60.320551, lng: 24.495673}
                ]
            },
            {
                colour: "#eaa102",
                path: [
                    {lat: 60.307965, lng: 24.495065}, // Origin
                    {lat: 60.308799, lng: 24.493767},
                    {lat: 60.309612, lng: 24.494819},
                    {lat: 60.310090, lng: 24.494444},
                    {lat: 60.310377, lng: 24.492288},
                    {lat: 60.311061, lng: 24.493855},
                    {lat: 60.311667, lng: 24.491902},
                    {lat: 60.312193, lng: 24.489542},
                    {lat: 60.312900, lng: 24.492868},
                    {lat: 60.314048, lng: 24.493995},
                    {lat: 60.314537, lng: 24.492107},
                    {lat: 60.316228, lng: 24.494476},
                    {lat: 60.316823, lng: 24.492169},
                    {lat: 60.318438, lng: 24.492877},
                    {lat: 60.319681, lng: 24.491136},
                    {lat: 60.320775, lng: 24.493872}
                ]
            }
        ]
    }

    render()
    {
        return (
            <div className="interactive-map">
                <h2>Interactive Map</h2>
                <InteractiveMap 
                    markers={this.state.markers}
                    routes={this.state.routes}
                />
            </div>
        )
    }
}

export default MapView;

/*
    Sample Paths:
        - 1: (Easy)
            60.305414, 24.505009 - Start
            60.305813, 24.503711
            60.306711, 24.502735
            60.307572, 24.502327
            60.307721, 24.501404
            60.307949, 24.500835
            60.308746, 24.499885
            60.309166, 24.499284
            60.309968, 24.498533
            60.310212, 24.496782
            60.310749, 24.496288
            60.310972, 24.495398
            60.311572, 24.495076
            60.311917, 24.494400
            60.313150, 24.492877
            60.314053, 24.493939
            60.314223, 24.495119
            60.314993, 24.496106
            60.315683, 24.496130
            60.316677, 24.494800
            60.318181, 24.495809
            60.318803, 24.497118
            60.319589, 24.496667
            60.319987, 24.495712
            60.320534, 24.495240 - End
        - 2: (Medium)
            60.309687, 24.501353 - Start
            60.310681, 24.500312
            60.311505, 24.500967
            60.312605, 24.502136
            60.312918, 24.500752
            60.314108, 24.501010 (Lake)
            60.314878, 24.500753
            60.315829, 24.499476
            60.316663, 24.501482
            60.317741, 24.501289
            60.318320, 24.500302
            60.319101, 24.498768
            60.320280, 24.499171
            60.320551, 24.495673 - End
        - 3: (Hard)
            60.307965, 24.495065 - Start
            60.308799, 24.493767
            60.309612, 24.494819
            60.310090, 24.494444 (Lake)
            60.310377, 24.492288
            60.311061, 24.493855
            60.311667, 24.491902
            60.312193, 24.489542
            60.312900, 24.492868
            60.314048, 24.493995
            60.314537, 24.492107
            60.316228, 24.494476
            60.316823, 24.492169
            60.318438, 24.492877
            60.319681, 24.491136
            60.320775, 24.493872 - End




*/