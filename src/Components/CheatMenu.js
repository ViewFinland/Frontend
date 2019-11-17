import React from 'react';
import Button from 'react-bootstrap/Button';

const gangnamStyle = {
    width: '100%',
    height: '100%'
};

class LandingPage extends React.Component {

   render() {
      return (
         <div className="cheat-menu" style={gangnamStyle}>
            <div className="title">
               <h1>CheatMenu</h1>
               <p>#junction2019</p>
            </div>
            <div>
                <p>Quizzes</p>
                <Button href="/quizkid"> Quiz 1 </Button>
                <Button href="/quizadult"> Quiz 2 </Button>
            </div>
            <div>
                <p>Things</p>
                <Button href="/filtering"> Filter view </Button>
                <Button href="/map"> Map view </Button>
                <Button href="/"> Back </Button>
            </div>
        </div>
      )
   }
}
export default LandingPage;