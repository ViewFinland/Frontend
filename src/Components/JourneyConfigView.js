import React from 'react';

class ConfigureJourneyView extends React.Component {
    render() {
       return (
          <div>
             <h1>Journey configuration thingy?</h1>
             <div className="navigation-buttons">
                <Button href="">
                  <p>Back</p>
               </Button>
               <Button href="/journeyconfig">
                  <p>Next</p>
               </Button>
            </div>
          </div>
       )
    }
 }
 export default ConfigureJourneyView;