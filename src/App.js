import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import FilterView from './Components/FilterView';
import JourneyConfigView from './Components/JourneyConfigView';
import LandingPage from './Components/LandingPage';
import NoticeView from './Components/NoticeView';
import QuizView from './Components/QuizView';
import NavigationView from './Components/NavigationView';
import MapView from './Components/MapView/MapView';
import createBrowserHistory from 'history';
import styles from './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      noticeTitle: "Weeboob",
      noticeText: "woob woob"
    }
  }

   render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/filtering" component={FilterView}/>
              <Route path="/journeyconfig" component={JourneyConfigView}/>
              <Route path="/navigation" component={NavigationView}/>
              <Route path="/notice" render={(props) => <NoticeView text={props.text} title={props.title}/> }/>
              <Route path="/quiz" render={(props) => <QuizView />}/>
              <Route path="/map" component={MapView}/>
            </Switch>
          </div>
        </BrowserRouter>
      )
   }
}
export default App;

