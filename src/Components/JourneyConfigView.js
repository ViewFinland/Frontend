import React from 'react';
import Button from 'react-bootstrap/Button';

class ConfigureJourneyView extends React.Component {
    render() {
       return (
          <div>
             <h1>Journey configuration thingy?</h1>
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