import React from 'react';
import Button from 'react-bootstrap/Button';

class LandingPage extends React.Component {

   render() {
      return (
         <div>
            <div className="title">
               <h1>ViewFinland</h1>
            </div>
            <div className="login-buttons">
               <Button disabled={true}>
                  <p>Login</p>
               </Button>
               <Button disabled={true}>
                  <p>Sign up</p>
               </Button>
            </div>
            <div className="plan-journey">
               <Button size="lg" href="/filtering">
                  <p>Plan Journey</p>
               </Button>
            </div>
            <div>
               <Button href="/cheat"> hehehe </Button>
            </div>
         </div>
      )
   }
}
export default LandingPage;