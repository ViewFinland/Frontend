import React from 'react';
import Button from 'react-bootstrap/Button';

class LandingPage extends React.Component {

   render() {
      return (
         <div>
            <div>
               <h1>ViewFinland</h1>
            </div>
            <Button >
               <p>Login</p>
            </Button>
            <Button>
               <p>Sign up</p>
            </Button>
            <Button href="/filtering">
               <p>Plan Journey</p>
            </Button>
         </div>
      )
   }
}
export default LandingPage;