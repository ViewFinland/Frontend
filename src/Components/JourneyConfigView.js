import React from 'react';
import Button from 'react-bootstrap/Button';
import InteractiveMap from './InteractiveMap/InteractiveMap';

class ConfigureJourneyView extends React.Component {
   constructor(){
      super();
      this.state = {
         timeEstimate: "",
         distance: "",
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
        ]
      };
   }

    render() {
       return (
          <div>
            <div className="interactive-map">{
               //<h2>Interactive Map</h2>
               //<InteractiveMap markers={this.state.markers} />
            }
            </div>
             <div className="navigation-buttons">
                <Button href="/filtering">
                  <p>Back</p>
               </Button>
               <Button href="/">
                  <p>Home</p>
               </Button>
               <Button href="/notice">
                  <p>Next</p>
               </Button>
            </div>
          </div>
       )
    }
 }
 export default ConfigureJourneyView;