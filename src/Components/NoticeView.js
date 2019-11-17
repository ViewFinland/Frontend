import React from 'react';
import Button from 'react-bootstrap/Button';
import Playlist from 'react-mp3-player';
import soundfile from '../Audio/slow_food_insight.mp3';

const playlistOverideStylingOpts = {
   offset : {
     left : 300
   },
   breakpoint : {
     maxWidth : 768
     }
 };

 const tracks = [ soundfile ];

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
         <Playlist tracks={tracks} opts={playlistOverideStylingOpts}/>
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