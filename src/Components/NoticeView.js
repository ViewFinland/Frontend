import React from 'react';
import Button from 'react-bootstrap/Button';

class NoticeView extends React.Component {
    render() {
       return (
          <div>
             <h1>About...</h1>

             <div className="navigation-buttons">
                <Button href="/journeyconfig">
                  <p>Back</p>
               </Button>
               <Button href="/navigation">
                  <p>Next</p>
               </Button>
            </div>
          </div>
       )
    }
 }
 export default NoticeView;