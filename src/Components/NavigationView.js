import React from 'react';
import Button from 'react-bootstrap/Button';

class NavigationView extends React.Component {
    render() {
       return (
          <div>
             <h1>Map goes here part 2</h1>

             <div className="navigation-buttons">
               <Button href="/">
                  <p>Home</p>
               </Button>
            </div>
          </div>
       )
    }
 }
 export default NavigationView;