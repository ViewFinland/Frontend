import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import FilterView from './Components/FilterView';
import JourneyConfigView from './Components/JourneyConfigView';
import LandingPage from './Components/LandingPage';
import NavigationView from './Components/NavigationView';
import NoticeView from './Components/NoticeView';
import MapView from './Components/MapView/MapView';
import createBrowserHistory from 'history';
import styles from './App.css';

class App extends React.Component {
   render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/filtering" component={FilterView}/>
              <Route path="/journeyconfig" component={JourneyConfigView}/>
              <Route path="/navigation" component={NavigationView}/>
              <Route path="/notice" component={NoticeView}/>
              <Route path="/map" component={MapView}/>
            </Switch>
          </div>
        </BrowserRouter>
      )
   }
}
export default App;

