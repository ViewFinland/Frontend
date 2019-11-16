import React from 'react';
import Button from 'react-bootstrap/Button';

class NoticeView extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         title: props.title,
         text: props.text
      }
   }

   render() {
      return (
         <div>
         <h1>{this.state.title}</h1>
         <p>{this.state.text}</p>

         <div className="navigation-buttons">
            <Button href="/journeyconfig">
            <p>Back</p>
         </Button>
         <Button href="/">
            <p>Home</p>
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